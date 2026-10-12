# Year 15 · The value of what we retain

Bilingual (ES/EN) educational sustainability decision game for **all employees**. No engineering background is required.

- Canonical route: `year-15-challenge/?hubLang=es` or `?hubLang=en`.
- `index.html` launches the game from `game.js` and `game.css`.
- `game.js` contains **complete, separately authored Spanish and English copy**. Do not translate DOM fragments or re-enable `localization.js`.
- Four missions: investigate unnecessary replacement, preserve suitable components, assess reuse and recovery, report evidence responsibly.
- Content is fictional. Never portray choices as technical approvals or quantify environmental savings without validated inputs.
- Guidance is provided by ARIA, with language-matched speech synthesis when supported by the browser.
- Progress is local to the user's browser. `progress-bridge.js` is configured to recognise the `.final-screen` view.
- Back, home, retries, final review and language switching are intentionally supported.
- `payload/`, `.payload/`, `localization.js` and `readability.css` are **legacy files not loaded** by this redesign; retain only for historical rollback.
- The cover reuses an avatar asset at `../ethical-armor/aria-original.jpg`.

## QA acceptance checks
1. Both `hubLang=es` and `hubLang=en` load the same four missions with complete native-language copy.
2. Each mission requires selecting and confirming a choice; an incorrect choice shows feedback and can be retried.
3. Forward navigation is available only after confirmation; previous steps and home remain accessible.
4. All four choices lead to `.final-screen` and a non-environmental exercise score.
5. Browser reload resumes a saved session, while Play Again clears it.
6. All text is readable at standard desktop and narrow mobile widths; speech output matches the active language.
