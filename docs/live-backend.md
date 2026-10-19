# Live Portfolio assistant

## Architecture

The static GitHub Pages client calls the fixed public HTTPS endpoint in `portfolio-api.js`. n8n runs the separate backend; GitHub Pages does not execute server code. This supersedes the earlier proposed same-origin relay. `n8n-adapter.js` remains disabled legacy code, unused by the live assistant.

`POST https://n8n.e-kontent.space/webhook/portfolio-agent-v1` accepts JSON actions `session`, `chat`, `review`, and `proposal`. Nothing is sent on page load. Chat and Telegram delivery are separate branches. The model has no tools or sending capability. The owner's existing Telegram bot delivers requests to the owner; it does not impersonate a personal Telegram account.

The model receives a build-time snapshot of `buildPublicProfile()` in EN/UK/RU/PL. Instructions prohibit invented experience, rates, availability or commitments. Unknown facts remain unknown. Model output is untrusted and rendered with `textContent`; grounding reduces but cannot eliminate hallucinations.

## Boundaries and quotas

The public URL is not a secret or administrative API. Model, Telegram, database and control-webhook secrets stay in n8n credentials. The administration key stays in Vaultwarden. Instance-specific exports are ignored by Git.

- POST/JSON only; expected Origin and CORS origin `https://fedorovserhii.github.io`.
- No ambient cookies (`credentials: omit`); a one-hour random session capability is held only in page memory. Postgres stores its SHA-256 hash.
- Action-specific key allowlists reject destinations, tools, model names, system roles and arbitrary endpoints from visitors.
- Serialized JSON maximum 8 KiB; chat 600 characters; history 12 entries; reply 4,000 characters; proposal 1,200 characters. Old client history is trimmed to fit.
- One in-flight model call per session. Gemini timeout 15 seconds; workflow timeout 35 seconds; client timeout 25 seconds. Model maximum output 900 tokens with no thinking budget.

Atomic counters and reservation transitions use a short Postgres advisory transaction lock. Quotas are fixed windows:

| Scope | Maximum |
| --- | --- |
| Authorization requests, global | 120/minute |
| New sessions, global | 60/hour |
| Chat, per session | 10/minute |
| Chat, global | 200/day |
| Reviews, per session | 10/hour |
| Delivery attempts, per session | 3/hour |
| Delivery attempts, global | 20/day |

Only the dedicated `portfolio_agent_v1` schema is created/updated. Existing application tables and workflows are not changed.

Origin/CORS and session capabilities are browser protections, **not visitor authentication**. A non-browser client can spoof Origin and obtain sessions. Quotas bound downstream usage but do not prevent traffic reaching n8n. No per-IP limiter, CAPTCHA, reverse-proxy body-limit change or independently verified provider spending cap is included. Reverse-proxy abuse controls remain appropriate follow-up hardening.

## Review and delivery

The server issues a ten-minute review token bound to exact proposal hash, session, locale and intent. The full text and recipient appear before an initially unchecked consent checkbox. Editing text or changing intent/language invalidates review and consent. Chat instructions cannot send Telegram messages.

Sending requires the current token, exact reviewed text, consent and an idempotency key. The server reserves `sending` before Telegram. Success requires Telegram's message ID for the fixed recipient and persistence of that result. Repeating a confirmed key returns `accepted` with `duplicate: true` without resending. Changing the key for the same reserved review is rejected. Uncertain/in-flight delivery is not retried automatically.

This protects a reserved review, not universal exactly-once delivery. A new session, a deliberately new review, or network ambiguity may need human reconciliation. Do not claim success without an acknowledgement or resend an uncertain request blindly.

## Privacy

Notices in every language explain that n8n and Google Gemini process chat and the owner's Telegram receives confirmed requests. A heuristic blocks obvious contacts in chat; visitors may voluntarily include a reply address in the separately reviewed request. Do not submit secrets or sensitive personal information.

The workflow does not save successful, failed or manual execution payloads. Conversation lives in browser memory, with a bounded copy sent to the model per request. Postgres stores session hashes, quota counters, proposal hashes and delivery metadata, not chat/proposal text. Hourly cleanup removes session/review metadata older than 24 hours (normally within 25 hours while the scheduler operates); counters older than two days are removed. Telegram messages remain until deleted. Provider policies, infrastructure logs and backups have separate retention; this setup does not override them. Clearing the UI clears browser state, not Telegram/provider records.

## Deployment and rollback

`node integration/build-workflows.mjs` produces ignored `integration/n8n/setup.json` and `gateway.json`, validating Code-node syntax. Supply these instance-specific **references**, not secret values, as process environment:

- `PORTFOLIO_CONTROL_CREDENTIAL_ID`: existing n8n header credential for `X-Portfolio-Control`.
- `PORTFOLIO_POSTGRES_CREDENTIAL_ID`: existing Postgres credential.
- `PORTFOLIO_TELEGRAM_CREDENTIAL_ID`: existing Telegram bot credential.
- `PORTFOLIO_GEMINI_CREDENTIAL_ID`: existing `googlePalmApi` credential.
- `PORTFOLIO_TELEGRAM_CHAT_ID`: verified owner chat, fixed server-side.
- Optional `PORTFOLIO_GEMINI_MODEL`, default `models/gemini-2.5-flash`.

Deploy only the two exact Portfolio workflow names. Activate the authenticated `Portfolio - setup and diagnostics`, invoke once for the idempotent schema migration/model check, then deactivate it. Keep `Portfolio - guarded API` active for public requests and hourly cleanup. Temporary connection-verification workflows remain inactive.

When public facts change, regenerate/redeploy the model snapshot as well as the profile artifacts. Reuse credential IDs; never export credentials into source. To disable interaction, publish `LIVE_ASSISTANT_ENABLED = false`. For immediate server shutdown, deactivate the gateway; this also stops its cleanup scheduler. Do not drop the schema during routine rollback.

The module graph uses the release query `v=live-20261019` so returning visitors do not mix cached demo modules with the live client. On another frontend release, update this query consistently in `index.html` and its affected import graph.

See [live validation](live-integration-validation.md). Unit tests use mocks. The labelled local preview never sends Telegram. Real delivery tests require owner approval and explicit test text; they are not an unsolicited recurring task.
