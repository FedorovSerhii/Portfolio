# Content Architecture Plan

## Goal
Move portfolio content out of `translations.js` so menu labels, section text, certificates, and contacts can be edited per language without touching application logic. The site should stay English-first, with Russian and Ukrainian as primary maintained secondary languages and Polish as an additional useful locale.

## Proposed Structure
```text
content/
  en.json
  ru.json
  uk.json
  pl.json
  shared.json
```

Each language file should contain only localized content:
- page metadata
- header text
- language selector label
- menu and submenu labels
- section content for welcome, experience, technologies, projects, contacts, and education
- certificate labels and image references

English should be the canonical content source. Russian and Ukrainian should be reviewed manually. Polish can stay active as long as it is kept reasonably aligned with English.

`shared.json` should contain reusable non-localized data:
- contact handles and URLs
- certificate image paths
- supported language list
- fallback language
- optional archived/disabled language metadata, if old translations need to be preserved outside the active UI

## Implementation Steps
1. Define a stable JSON schema for language files.
2. Move existing content from `translations.js` into `content/{lang}.json`.
3. Replace `getTranslations(...)` with an async content loader.
4. Add fallback behavior: if a language file or section is missing, use English.
5. Keep button state and active section stable while language files load.
6. Update README with the new content editing workflow.
7. Validate the English, Russian, Ukrainian, and Polish files during development with a small Node script.
8. Keep German, French, and Spanish out of the active UI unless there is a real plan to maintain them at the same quality level.

## Important Constraint
Loading JSON files with `fetch()` works well on GitHub Pages and a local HTTP server, but can fail when opening `index.html` directly with `file://`. If direct file opening must remain supported, use language files as ES modules instead of JSON, or document that local preview should use:

```bash
python -m http.server 8000
```

## Recommended First Refactor
Start with menu labels and metadata first, then move large section HTML after the loader and fallback logic are proven.
