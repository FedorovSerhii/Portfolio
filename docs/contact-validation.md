# Required reply contact — 2026-10-19

## Implemented boundary

Job/service requests require an email or Telegram `@username`. Client and server use the same syntax policy. Preview and consent cover text plus normalized contact; changing either invalidates authorization. Contact is visitor-provided, not verified identity. Existing anonymous submissions cannot be retroactively identified.

Telegram has a separate localized reply-contact block and an explicit no-bot-reply-relay notice. The existing owner destination and credentials are unchanged. No RAG, Drive, two-way relay, permissions or VPN changes are included.

## Verified before publication

- 29 dependency-free Node tests passed, including legacy requests, invalid input, changed-contact hash binding, client consent mismatch, HTML escaping and all four translations.
- Generated public profiles match their source; `git diff --check` passed.
- Workflow generation validated Code-node syntax. Only three fields in the existing Portfolio API workflow were patched; no schema migration or setup/diagnostic workflow activation.
- Active gateway readback confirmed validator, authorization envelope, Telegram template, fixed recipient, credential reference and disabled execution-payload saving.
- Actual public API: missing/blank contact returned `400 contact_required`; URL contact returned `400 contact_invalid`; valid reviews succeeded in EN/UK/RU/PL; changing text or contact after review returned `409 review_mismatch`; absent consent returned `400 invalid_input`. These checks requested no successful delivery.
- Local browser: empty/invalid errors focus the contact field; valid email and Telegram contacts appear in preview; editing contact clears consent and disables send. Visitor HTML stays literal text. All four locales at 320 px have no horizontal overflow and preserve the draft contact while invalidating consent. Ukrainian preview at 390 px also has no horizontal overflow.

Publication and the single owner-approved real delivery are verified separately after deployment; this record does not claim those steps have happened yet.
