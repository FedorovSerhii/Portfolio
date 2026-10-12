# Portfolio

Personal portfolio site for showcasing the experience of Sergey Fedorov, a system administrator specialising in IT infrastructure, networking, CCTV and VoIP solutions.

## Features
- English-first interface with Russian, Ukrainian, and Polish translations plus persisted language preference.
- Accessible navigation with ARIA attributes, focus management and keyboard-friendly controls.
- Shareable section links with native browser Back/Forward and new-tab support.
- A service-focused homepage, compact horizontal navigation, and separate direct-contact paths for clients and employers.
- Experience, projects, education, tools and service scopes, including automation and AI tools.
- One-time setup and monthly maintenance descriptions for backups, Grafana monitoring with messenger notifications, and Linux/Docker.
- A visible public profile, generated JSON/Markdown/text files, and a JSON-LD `Person` record from shared factual data.
- A multilingual local demo assistant with preset replies, a job-offer review preview and an optional animated SVG companion.
- Responsive layout optimised for desktop and mobile viewports.

## Getting started
1. Clone the repository.
2. Serve the repository over HTTP. All assets are static, no build step is required. ES module loading requires a server rather than opening `index.html` directly.

```bash
# serve the site locally
python3 -m http.server 8000
```

Then navigate to `http://localhost:8000` and explore the interface.

## Project structure
```
.
├── Avatar.png                # Retained illustration from the original site
├── HeaderBackground.png      # Retained original decorative background
├── HeaderPicture.png         # Retained original illustrated portrait
├── index.html                # Main HTML file
├── main.js                   # Language switcher, rendering and navigation
├── styles.css                # Global styles and layout rules
├── translations.js           # Existing experience, projects and education
├── portfolio-data.js         # Canonical public facts and availability settings
├── portfolio-content.js      # Visible profile, services and skills from those facts
├── additions-translations.js # New interface strings in all four languages
├── landing-translations.js   # Homepage and direct-contact copy in all four languages
├── assistant.js              # Local preset demo; no networking or persistence
├── assistant-policy.js       # Text/history limits and local topic matching
├── n8n-adapter.js            # Disabled future same-origin relay adapter
├── profile.json              # Generated public profile in all four languages
├── profile.md                # Generated readable public profile
├── llms.txt                  # Generated public content index
├── scripts/generate-profile.mjs
├── docs/backend-integration.md
├── tests/                    # Local profile, adapter and browser checks
├── translations.json         # Legacy data (not used directly)
└── static/
    └── images/               # Icons and certificate previews
```

## Content management
- Edit public names, contacts, skills, service scopes and availability in **`portfolio-data.js`**. All new profile facts have English, Russian, Ukrainian and Polish versions. The visible profile, service pages and demo replies use this source directly. Public contacts are also shared with the existing contact templates.
- Edit new interface labels and prepared demo messages in `additions-translations.js`. Homepage, contact guidance and email draft templates live in `landing-translations.js`. Existing experience, project and education content remains in `translations.js`; `translations.json` is unused legacy data. The old welcome/contact templates are retained there but are superseded by the renderers in `portfolio-content.js`.
- Placeholder phone/social values remain in `main.js` and are hidden at render time.
- When adding a route, update the route allowlist and navigation in `main.js`/`index.html`, then provide a nonempty heading and localized content. Each render ensures `main` has a heading with `id="section-title"`.

### Availability

The exact edit location is `portfolioData.availability` in **`portfolio-data.js`**. Both entries start as `{ confirmed: false, status: null }` and produce no visible status or public artifact field. A status is published only when `confirmed` is exactly `true` and `status` is recognised:

| Entry | Recognised status values |
| --- | --- |
| `jobSearch` | `open`, `closed` |
| `freelance` | `open`, `limited`, `closed` |

After the owner confirms a status, set the corresponding entry, for example `jobSearch: { confirmed: true, status: 'open' }`, and regenerate the public files. To hide it again, use `{ confirmed: false, status: null }`. Statuses are localized in the visible profile and welcome page; only confirmed values enter generated profiles and the JSON-LD description.

### Generate the public profile

Use Node.js locally; no dependencies or site build step are needed:

```bash
node scripts/generate-profile.mjs
node scripts/generate-profile.mjs --check
```

The equivalent npm commands are `npm run generate:profile` and `npm run check:profile`. Generation updates `profile.json`, `profile.md`, `llms.txt` and the marked JSON-LD block in `index.html`. Commit these generated files together with changes to their source. `--check` exits with a failure when an artifact is missing or stale.

The JSON file contains a `profiles` map keyed by `en`, `ru`, `uk` and `pl`. The Markdown file exposes the same facts in all four languages. The plain-text index links to public content without hidden instructions. All three files are linked in the footer and the visible `#profile` section. The generator uses the shared profile source rather than copying legacy performance claims or employment details into new facts.

## Direct contact

The main localized calls to action lead to `#contacts/job` (offer a job) and `#contacts/service` (discuss a service). Each view retains the existing public email, Telegram and LinkedIn. The email link opens a localized subject/body template in the visitor's own mail application. The visitor reviews and sends the draft there; opening the contact page or link is not a successful submission. No contact form, automatic sending or lead analytics is added. A language change preserves the selected contact intent.

The homepage introduces Sergey by name, with concise first-person copy, service scopes and links to experience/projects. The owner chose a personal page with calm colors and natural writing; the layout uses typography and open sections rather than repeated promotional cards. No real portrait or workspace photograph has been supplied. The earlier illustrations are retained as files, but are not presented as photographs of the owner or his workspace. The favicon is the local typographic `static/images/favicon.svg`.

Unconfirmed legacy metrics are not promoted into the new homepage. The primary revenue goal, market and case-study evidence still need the owner's answers; see [the growth plan](docs/growth-plan.md) and [research sources](docs/research-sources.md).

## Local demo assistant

`#assistant` is an explicitly labelled demonstration with deterministic, preset responses. It has no connected language model, n8n workflow, fetch call or external message send. It uses only facts visible in the portfolio and does not accept offers, confirm availability or make commitments.

The separate `#assistant/job` and `#assistant/service` links remain explicitly labelled demo exploration paths. They are optional alternatives to direct contact. The job view offers a local preview of role expectations. Reviewing text enables a consent checkbox; editing the proposal or changing its topic clears that review and consent. The Telegram forwarding button is always disabled in this demo, even with consent, and the page states that nothing has been sent.

Messages are limited to 600 characters, history to the latest 12 messages, and proposal drafts to 1,200 characters. Visitor text is rendered with `textContent`. Empty, oversized and unsupported messages receive prepared guidance. The demo does not ask for contact information and rejects obvious email addresses, phone numbers and contact handles from conversation submissions and reviewed proposals.

Conversation, drafts and consent live only in page memory. Language changes preserve them, input focus and selection; reloading clears them. The explicit clear control removes conversation and drafts. Only the existing language preference uses local storage. The SVG character has a short finite walk, a jump button and an animation toggle; CSS and JavaScript both respect reduced-motion preferences.

## Future n8n relay

`n8n-adapter.js` is separate from the demo and is not imported by it. `DEFAULT_N8N_CONFIG.enabled` is `false`; disabled calls reject before validation or network access. Its future paths are `/api/assistant` and `/api/proposals` on the same origin. HTTPS is required except on localhost for development. A browser-origin override or external endpoint is rejected. No n8n URL, credentials, bot token or destination is present in the client.

The adapter has bounded `sendMessage` and `forwardOffer` methods. Forwarding requires an exact reviewed proposal, explicit consent and an idempotency key, but these client checks do not replace server controls. GitHub Pages alone cannot serve the relay. Follow [the backend integration specification](docs/backend-integration.md) before implementing or enabling a live connection, including server authentication, CSRF, rate/body/model limits, server-verified review and consent, delivery idempotency and retention rules.

## Verification

See [the local verification guide](tests/README.md) for dependency-free profile/adapter checks and optional Playwright browser regressions. Browser checks cover all four languages, routes, history, focus, a 320 px viewport, offline demo behavior, consent and reduced motion. Playwright is only a development tool; it is not a site dependency.

The latest personal-page design and verification results are recorded in [docs/personal-design-validation.md](docs/personal-design-validation.md). The previous homepage/contact iteration is recorded in [docs/growth-validation.md](docs/growth-validation.md); the earlier public-profile/demo implementation and integration boundaries are recorded in [docs/validation.md](docs/validation.md).

## Accessibility & UX notes
- Navigation state uses `aria-current` and `aria-expanded` to describe context to assistive technologies.
- Initial loading and language changes preserve focus; explicit section navigation, including a repeated link activation, focuses the main content region.
- Link directly to `#welcome`, `#experience`, `#projects`, `#contacts`, `#contacts/job`, `#contacts/service`, `#education`, `#technologies/familiar`, `#technologies/proficient`, `#services`, `#profile`, `#assistant`, `#assistant/job`, or `#assistant/service`. `#technologies` opens the daily-use list. Unknown sections and unsupported contact/assistant intents fall back to the overview.
- Animations respect `prefers-reduced-motion`; the character additionally offers its own animation toggle.

## License
This project is distributed for personal portfolio purposes. Reach out via the listed contacts to discuss reuse.
