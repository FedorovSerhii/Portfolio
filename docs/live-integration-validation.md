# Live integration validation — 2026-10-19

Implemented from `origin/main` baseline `6633846` in an isolated `codex/portfolio-live-agent` worktree. Unrelated local design/social-preview changes were not included. Public facts, contacts and existing navigation were preserved. The owner authorized n8n setup, Telegram delivery and publication of this integration.

## Confirmed backend results

- Existing n8n API access, existing database, Gemini credential and Telegram bot were verified without exporting secret values.
- Telegram `getChat` matched the owner's public `@Medoedkoi` identity before any send.
- Real public API responses returned HTTP 200 for chat in UK, EN, RU and PL.
- CORS preflight: HTTP 204, exact Portfolio origin, POST, content-type.
- Foreign Origin: 403. Client-supplied chat destination: 400. Missing consent: 400. Changed proposal after review: 409.
- Review quota: first ten accepted; eleventh returned 429 without Telegram delivery.
- One clearly labelled integration-test request was acknowledged by Telegram. Same-key repetition returned `duplicate: true`; changing the key for the same review returned 409. No second send was made by either request.
- Setup migration succeeded in the dedicated schema; unrelated workflows/tables were not edited. Execution-payload logging is disabled for these workflows.

## Local checks

- Dependency-free Node suite: 24 tests covering facts, locales, legacy disabled adapter, server allowlists/limits, fixed live transport, consent, history byte trimming, Telegram text escaping, uncertain network/non-JSON delivery failures and no automatic retries.
- Generated public profile content matches canonical facts; no factual content changes.
- Browser mock preview: EN/UK/RU/PL UI, live labels, optional contacts only in reviewed request, chat reply, job/service form, initially disabled sending, consent enabled only after review, consent reset after text/language changes, and disabled repeat sending after confirmed mock delivery.
- 320 px responsive viewport: no horizontal document overflow. Mock preview has an explicit banner and never calls Telegram/model services.

The real Telegram test and local mocked UI test are separate evidence. Browser screenshots are visual spot checks, not accessibility certification. Historical offline-demo tests do not validate live networking. Production publication and live-browser verification are reported in the task handoff after deployment.

## Limits

Anonymous public traffic is rate-limited but not authenticated as a human. Origin is spoofable outside browsers. Per-IP/reverse-proxy abuse controls and provider spending caps were not changed. Model grounding is not a guarantee of factual accuracy. Provider/backups retention is separate from the dedicated schema. See [implemented backend](live-backend.md) for operation and rollback.
