# Local verification

These checks exercise the static portfolio and its disabled future relay adapter. They do not connect to n8n, a language model, or Telegram, and they do not publish or push source changes.

Use Node.js 24 for the commands below. The deployed site needs no Node runtime or packages.

## Public data and adapter checks

After editing public facts, regenerate the static profile artifacts locally:

```bash
npm run generate:profile
```

Then check artifact freshness and run the dependency-free tests:

```bash
npm run check:profile
node --test --test-isolation=none tests/profile.test.mjs tests/adapter.test.mjs
```

The tests cover preservation of identity and contacts, four-language content, availability confirmation, matching public artifacts/JSON-LD, disabled transport, input validation, same-origin endpoints, proposal review/consent and simulated relay failures. All adapter requests use injected local test doubles.

## Browser checks

Playwright and Chromium are development-only tools. An existing Playwright installation can be selected with `PLAYWRIGHT_MODULE_PATH`. For a separate temporary installation on Linux:

```bash
npm install --prefix /tmp/portfolio-qa --no-save --package-lock=false playwright
PLAYWRIGHT_BROWSERS_PATH=/tmp/portfolio-qa/browsers /tmp/portfolio-qa/node_modules/.bin/playwright install chromium --only-shell
```

Start the local static server from the repository root in a separate terminal:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Run the browser checks from the repository root:

```bash
PLAYWRIGHT_MODULE_PATH=/tmp/portfolio-qa/node_modules/playwright PLAYWRIGHT_BROWSERS_PATH=/tmp/portfolio-qa/browsers node tests/navigation.cjs
PLAYWRIGHT_MODULE_PATH=/tmp/portfolio-qa/node_modules/playwright PLAYWRIGHT_BROWSERS_PATH=/tmp/portfolio-qa/browsers node tests/conversion-browser.cjs
PLAYWRIGHT_MODULE_PATH=/tmp/portfolio-qa/node_modules/playwright PLAYWRIGHT_BROWSERS_PATH=/tmp/portfolio-qa/browsers node tests/demo-browser.cjs
```

If Playwright is installed in the repository, omit `PLAYWRIGHT_MODULE_PATH`. Set `PORTFOLIO_TEST_URL` to use another local server address. Stop the server after checking.

Navigation checks validate headings and ARIA references for all four locales at desktop and 320 px, direct links, keyboard activation, browser history, new tabs, unknown routes, language preference and blocked storage. Demo checks load local assets first, then put the browser offline and monitor fetch, XHR, beacon, WebSocket, network attempts and storage writes while exercising chat and proposal previews.

Contact-path checks cover a visible mobile first-screen heading, live contact routes for both audiences, unchanged public destinations, localized mailto draft templates, contact intent and focus across language changes, and the absence of automatic sends. They inspect destination links without sending emails or opening messaging conversations. These checks establish interface behavior, not a measured conversion or revenue improvement.

These are focused regression checks, not a complete accessibility certification. Live webhook authentication, CSRF, server rate limits, model behaviour and Telegram delivery require the future server integration described in [backend-integration.md](../docs/backend-integration.md).
