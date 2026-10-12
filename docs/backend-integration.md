# n8n and Telegram integration

## Current implementation

The portfolio is a static site. Its assistant is an explicitly labelled local demo with preset replies based on public portfolio content. It is not a connected model, n8n workflow, or Telegram bot. Conversation text and proposal previews stay in page memory; the demo does not request visitor contact details, persist conversations, or send them anywhere.

The adapter is a preparation point for a later server relay. A disabled adapter must reject before making a request. No webhook URL, model credential, bot token, Telegram destination, or webhook signing secret belongs in HTML, JavaScript, a public profile, or Git history.

The requirements below describe the server that still needs to be implemented and connected. They are not claims that a static GitHub Pages deployment already enforces server security or limits.

## Proposed server contract

Use a same-origin HTTPS relay, rather than calling an n8n webhook from the browser. GitHub Pages alone cannot provide these endpoints; deployment of a separate server or edge handler requires a future integration decision.

| Request | Purpose | Required result |
| --- | --- | --- |
| `POST /api/assistant` | A visitor asks about the public portfolio. | A bounded plain-text reply or a safe structured error. |
| `POST /api/proposals` | A visitor submits the exact proposal they have reviewed and explicitly consented to send. | Confirmation only after the server has confirmed the Telegram delivery result. |

Accept only JSON and the four supported locale codes (`en`, `ru`, `uk`, `pl`). Use an allowlist for intent and payload keys. Reject client-supplied system instructions, arbitrary tools, model names, webhook URLs, destinations, and privileged role fields. The server selects its profile source and model configuration; browser input cannot override them.

## Server controls required before enabling live mode

1. Keep n8n webhook authentication, any signing secret, model credentials, Telegram bot token, and the single approved Telegram destination in server-side secret storage. Authenticate the relay-to-n8n request with a supported credential or a timestamped HMAC with replay protection. Never return those values in errors or logs.
2. Restrict methods, content types, origins, and CORS. Validate the expected `Origin` and use a server-issued CSRF mechanism for forwarding actions. An origin check alone is not authentication. Do not rely on a browser-visible API key, a hidden UI button, or client validation to protect a public endpoint.
3. Enforce body, text, history, concurrency, and rate limits before n8n or a model call. The demo UI limits messages to 600 characters, local history to 12 entries, and proposal previews to 1,200 characters. Suggested server starting limits are 8 KiB per request, these same text/history limits, one active request per session, and 10 chat requests per minute per session/IP. Measure encoded bytes as well as characters; trim or reject history that exceeds the total body limit. Review these values against the actual workflow and hosting budget; enforce a separate global token/cost budget and stricter forwarding limits. UI limits do not replace these controls.
4. Use explicit upstream timeouts, bounded response sizes, and an allowlist of server-to-server destinations. Return generic error codes (`not_connected`, `invalid_input`, `rate_limited`, `timeout`, `unavailable`) without internal stack traces. A failed request must not be presented as a successful send. Avoid automatic retries for delivery unless protected by server-side idempotency.
5. Treat visitor text and model output as untrusted data. Render replies as plain text. Base factual replies on the public profile and refuse unsupported claims about employers, experience, certifications, results, prices, availability, or obligations. Unknown availability stays unknown. The assistant may describe services or draft questions; it cannot accept a job, promise a deadline, agree to a price, or commit Sergey to work.
6. Separate chat from delivery. A conversational instruction such as “send it” must not invoke Telegram, and a model must have no unrestricted sending tool. Forwarding is a distinct visitor action handled by deterministic server code after the consent checks below.
7. Minimize data handling. Before live mode, explain what is transmitted to the server, n8n/model provider, and Telegram, for what purpose, and for how long. Do not add contact fields or retention by default. Redact request text and personal details from routine logs; define a short retention period and deletion process for any deliberately retained data. Use TLS throughout.

## Review and consent before forwarding

The visitor must see the full final proposal and its recipient, then affirm consent and activate a separate sending control. Consent must start unchecked. Editing the proposal, changing the intent, or changing the reviewed content invalidates the prior consent. Navigation, language changes, a chatbot reply, and a previous submission cannot silently create consent for a new text.

The live request must carry the exact reviewed text, locale, intent, explicit consent, and an idempotency key. The server should issue a review token bound to a hash of that text and the session, with a short expiry. Check the token, text hash, consent, CSRF, size/rate limits, and replay/idempotency rules again on submission. Never trust a `confirmed: true` flag alone.

The Telegram destination is fixed by the server configuration. Ignore or reject any client-supplied chat ID. Record a minimal delivery result for idempotency and report success only when Telegram acknowledges the send. On ambiguity, reconcile that result before retrying so the recruiter’s proposal is not duplicated.

In the current demo, viewing a proposal and changing a consent control are local UI actions. Actual delivery remains unavailable, and the interface must explicitly state that nothing has been sent.

## Enabling the integration later

Implement and review the server relay and n8n workflow, configure server secrets, validate the deployed origin and limits, and test timeouts, duplicate submissions, consent changes, malformed upstream replies, and Telegram failures. Only then enable the client adapter and replace the demo notice with an accurate live-mode data notice. The present task does not enable or publish that integration.
