BEGIN;
CREATE SCHEMA IF NOT EXISTS portfolio_agent_v1;
CREATE TABLE IF NOT EXISTS portfolio_agent_v1.sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  token_hash bytea NOT NULL UNIQUE,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  busy_until timestamptz
);
CREATE TABLE IF NOT EXISTS portfolio_agent_v1.buckets (
  name text NOT NULL,
  window_start timestamptz NOT NULL,
  hits integer NOT NULL,
  PRIMARY KEY (name, window_start)
);
CREATE TABLE IF NOT EXISTS portfolio_agent_v1.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES portfolio_agent_v1.sessions(id) ON DELETE CASCADE,
  text_hash bytea NOT NULL,
  language text NOT NULL,
  intent text NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'reviewed' CHECK (status IN ('reviewed','sending','sent','uncertain')),
  idempotency_key text,
  telegram_message_id bigint,
  UNIQUE (session_id, idempotency_key)
);
CREATE OR REPLACE FUNCTION portfolio_agent_v1.take_budget(k text, period text, maximum integer)
RETURNS boolean LANGUAGE plpgsql AS $$
DECLARE used integer;
BEGIN
  INSERT INTO portfolio_agent_v1.buckets(name, window_start, hits)
  VALUES(k, date_trunc(period, now()), 1)
  ON CONFLICT(name, window_start) DO UPDATE SET hits=portfolio_agent_v1.buckets.hits+1
  RETURNING hits INTO used;
  RETURN used <= maximum;
END;
$$;
CREATE OR REPLACE FUNCTION portfolio_agent_v1.handle(p jsonb)
RETURNS jsonb LANGUAGE plpgsql AS $$
DECLARE s portfolio_agent_v1.sessions%ROWTYPE;
        r portfolio_agent_v1.reviews%ROWTYPE;
        token text;
        action text := p->>'action';
        language text := p->>'language';
        intent text := p->>'intent';
BEGIN
  PERFORM pg_advisory_xact_lock(7241820101);
  DELETE FROM portfolio_agent_v1.buckets WHERE window_start < now()-interval '2 days';
  DELETE FROM portfolio_agent_v1.reviews WHERE created_at < now()-interval '24 hours';
  DELETE FROM portfolio_agent_v1.sessions WHERE created_at < now()-interval '24 hours';
  IF NOT portfolio_agent_v1.take_budget('requests','minute',120) THEN
    RETURN jsonb_build_object('route','respond','code',429,'body',jsonb_build_object('error','rate_limited'));
  END IF;
  IF action='session' THEN
    IF NOT portfolio_agent_v1.take_budget('sessions','hour',60) THEN
      RETURN jsonb_build_object('route','respond','code',429,'body',jsonb_build_object('error','rate_limited'));
    END IF;
    token := replace(gen_random_uuid()::text,'-','') || replace(gen_random_uuid()::text,'-','');
    INSERT INTO portfolio_agent_v1.sessions(token_hash,expires_at)
    VALUES(sha256(convert_to(token,'UTF8')),now()+interval '1 hour') RETURNING * INTO s;
    RETURN jsonb_build_object('route','respond','code',200,'body',jsonb_build_object('sessionToken',token,'expiresIn',3600));
  END IF;
  SELECT * INTO s FROM portfolio_agent_v1.sessions
  WHERE token_hash=sha256(convert_to(coalesce(p->>'sessionToken',''),'UTF8')) AND expires_at>now() FOR UPDATE;
  IF NOT FOUND THEN
    RETURN jsonb_build_object('route','respond','code',401,'body',jsonb_build_object('error','session_expired'));
  END IF;
  IF action='chat' THEN
    IF s.busy_until>now() THEN
      RETURN jsonb_build_object('route','respond','code',429,'body',jsonb_build_object('error','busy'));
    END IF;
    IF NOT portfolio_agent_v1.take_budget('chat-session-'||s.id,'minute',10)
       OR NOT portfolio_agent_v1.take_budget('chat-global','day',200) THEN
      RETURN jsonb_build_object('route','respond','code',429,'body',jsonb_build_object('error','rate_limited'));
    END IF;
    UPDATE portfolio_agent_v1.sessions SET busy_until=now()+interval '40 seconds' WHERE id=s.id;
    RETURN jsonb_build_object('route','chat','sessionId',s.id);
  END IF;
  IF action='review' THEN
    IF NOT portfolio_agent_v1.take_budget('review-session-'||s.id,'hour',10) THEN
      RETURN jsonb_build_object('route','respond','code',429,'body',jsonb_build_object('error','rate_limited'));
    END IF;
    DELETE FROM portfolio_agent_v1.reviews WHERE session_id=s.id AND status='reviewed';
    INSERT INTO portfolio_agent_v1.reviews(session_id,text_hash,language,intent,expires_at)
    VALUES(s.id,sha256(convert_to(p->>'proposal','UTF8')),language,intent,now()+interval '10 minutes') RETURNING * INTO r;
    RETURN jsonb_build_object('route','respond','code',200,'body',jsonb_build_object('reviewToken',r.id,'expiresIn',600,'recipient','Sergey Fedorov (@Medoedkoi)'));
  END IF;
  IF action='proposal' THEN
    SELECT * INTO r FROM portfolio_agent_v1.reviews WHERE id=(p->>'reviewToken')::uuid AND session_id=s.id FOR UPDATE;
    IF NOT FOUND OR r.text_hash<>sha256(convert_to(p->>'proposal','UTF8'))
       OR r.language<>language OR r.intent<>intent OR (p->>'consent') IS DISTINCT FROM 'true' THEN
      RETURN jsonb_build_object('route','respond','code',409,'body',jsonb_build_object('error','review_mismatch'));
    END IF;
    IF r.idempotency_key IS NOT NULL AND r.idempotency_key<>p->>'idempotencyKey' THEN
      RETURN jsonb_build_object('route','respond','code',409,'body',jsonb_build_object('error','already_submitted'));
    END IF;
    IF r.status='sent' THEN
      RETURN jsonb_build_object('route','respond','code',200,'body',jsonb_build_object('status','accepted','duplicate',true));
    END IF;
    IF r.status IN ('sending','uncertain') THEN
      RETURN jsonb_build_object('route','respond','code',409,'body',jsonb_build_object('error','delivery_uncertain'));
    END IF;
    IF r.expires_at<=now() THEN
      RETURN jsonb_build_object('route','respond','code',409,'body',jsonb_build_object('error','review_expired'));
    END IF;
    IF EXISTS(SELECT 1 FROM portfolio_agent_v1.reviews WHERE session_id=s.id AND idempotency_key=p->>'idempotencyKey' AND id<>r.id) THEN
      RETURN jsonb_build_object('route','respond','code',409,'body',jsonb_build_object('error','already_submitted'));
    END IF;
    IF NOT portfolio_agent_v1.take_budget('proposal-session-'||s.id,'hour',3)
       OR NOT portfolio_agent_v1.take_budget('proposal-global','day',20) THEN
      RETURN jsonb_build_object('route','respond','code',429,'body',jsonb_build_object('error','rate_limited'));
    END IF;
    UPDATE portfolio_agent_v1.reviews SET status='sending',idempotency_key=p->>'idempotencyKey' WHERE id=r.id;
    RETURN jsonb_build_object('route','send','reviewId',r.id);
  END IF;
  RETURN jsonb_build_object('route','respond','code',400,'body',jsonb_build_object('error','invalid_input'));
EXCEPTION WHEN invalid_text_representation THEN
  RETURN jsonb_build_object('route','respond','code',400,'body',jsonb_build_object('error','invalid_input'));
END;
$$;
CREATE OR REPLACE FUNCTION portfolio_agent_v1.finish_chat(session uuid)
RETURNS boolean LANGUAGE sql AS $$
  UPDATE portfolio_agent_v1.sessions SET busy_until=NULL WHERE id=session RETURNING true;
$$;
CREATE OR REPLACE FUNCTION portfolio_agent_v1.finish_delivery(review uuid, message_id bigint)
RETURNS boolean LANGUAGE sql AS $$
  UPDATE portfolio_agent_v1.reviews SET
    status=CASE WHEN message_id IS NULL THEN 'uncertain' ELSE 'sent' END,
    telegram_message_id=message_id
  WHERE id=review AND status='sending' RETURNING message_id IS NOT NULL;
$$;
COMMIT;
SELECT 'ready' AS setup, 1 AS "schemaVersion";
