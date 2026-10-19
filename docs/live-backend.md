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

Both `review` and `proposal` require `replyContact`: an email address or Telegram `@username`. The shared syntax validator normalizes the domain/username, rejects missing or invalid contacts, and returns `contact_required` or `contact_invalid` with a reload/review explanation for legacy clients. This is self-reported contact, not verified identity or ownership.

The server issues a ten-minute review token bound to a SHA-256 hash of canonical JSON containing the exact proposal and normalized contact, plus session, locale and intent. The existing database function hashes this envelope; no schema migration is needed. The full text, reply contact and recipient appear before an initially unchecked consent checkbox. Editing text/contact or changing intent/language invalidates review and consent. Chat instructions cannot send Telegram messages. Reviews issued before contact binding cannot authorize the new envelope.

Sending requires the current token, exact reviewed text/contact, consent and an idempotency key. The server reserves `sending` before Telegram. Success requires Telegram's message ID for the fixed recipient and persistence of that result. Repeating a confirmed key returns `accepted` with `duplicate: true` without resending. Changing the key for the same reserved review is rejected. Uncertain/in-flight delivery is not retried automatically.

Telegram displays a separate localized reply-contact block, a safe `https://t.me/username` link for validated usernames, and a notice that the contact is unverified. Email is escaped readable text. All visitor text is escaped for Telegram HTML. Replies to the bot are not forwarded to the visitor; the owner replies through the supplied contact. Earlier anonymous submissions without a contact remain unreplyable unless the visitor returns and supplies one.

This protects a reserved review, not universal exactly-once delivery. A new session, a deliberately new review, or network ambiguity may need human reconciliation. Do not claim success without an acknowledgement or resend an uncertain request blindly.

## Privacy

Notices in every language explain that n8n and Google Gemini process chat and the owner's Telegram receives confirmed requests. A heuristic blocks obvious contacts in chat; the separate request form requires a reply contact and explicit consent to send it with the text. Contact is not added to model history. Do not submit secrets or sensitive personal information.

The workflow does not save successful, failed or manual execution payloads. Conversation lives in browser memory, with a bounded copy sent to the model per request. Postgres stores session hashes, quota counters, proposal hashes and delivery metadata, not chat/proposal text. Hourly cleanup removes session/review metadata older than 24 hours (normally within 25 hours while the scheduler operates); counters older than two days are removed. Telegram messages remain until deleted. Provider policies, infrastructure logs and backups have separate retention; this setup does not override them. Clearing the UI clears browser state, not Telegram/provider records.

## Deployment and rollback

`node integration/build-workflows.mjs` produces ignored `integration/n8n/setup.json` and `gateway.json`, validating Code-node syntax. Supply these instance-specific **references**, not secret values, as process environment:

- `PORTFOLIO_CONTROL_CREDENTIAL_ID`: existing n8n header credential for `X-Portfolio-Control`.
- `PORTFOLIO_POSTGRES_CREDENTIAL_ID`: existing Postgres credential.
- `PORTFOLIO_TELEGRAM_CREDENTIAL_ID`: existing Telegram bot credential.
- `PORTFOLIO_GEMINI_CREDENTIAL_ID`: existing `googlePalmApi` credential.
- `PORTFOLIO_TELEGRAM_CHAT_ID`: verified owner chat, fixed server-side.
- Optional `PORTFOLIO_GEMINI_MODEL`, default `models/gemini-2.5-flash-lite`.

For initial installation only, deploy the two exact Portfolio workflow names. Activate the authenticated `Portfolio - setup and diagnostics`, invoke once for the idempotent schema migration/model check, then deactivate it. Keep `Portfolio - guarded API` active for public requests and hourly cleanup. Temporary connection-verification workflows remain inactive.

For the required-contact patch, update only `Validate request`, the authorization query's payload expression, and the Telegram text expression in the existing gateway. Preserve all other nodes, connections, settings, credential references and the fixed recipient. Do not activate setup/diagnostics or migrate the database for this patch.

When public facts change, regenerate/redeploy the model snapshot as well as the profile artifacts. Reuse credential IDs; never export credentials into source. To disable interaction, publish `LIVE_ASSISTANT_ENABLED = false`. For immediate server shutdown, deactivate the gateway; this also stops its cleanup scheduler. Do not drop the schema during routine rollback.

The module graph uses the release query `v=live-20261019` so returning visitors do not mix cached demo modules with the live client. On another frontend release, update this query consistently in `index.html` and its affected import graph.

See [live validation](live-integration-validation.md). Unit tests use mocks. The labelled local preview never sends Telegram. Real delivery tests require owner approval and explicit test text; they are not an unsolicited recurring task.
