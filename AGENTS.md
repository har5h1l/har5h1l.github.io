## Learned User Preferences

- When updating the personal site, keep changes text-only unless the user explicitly asks to change layout, spacing, fonts, colors, images, buttons, or navigation.
- When replacing paragraphs, preserve existing in-copy links (for example MedArc and internal project pages) unless the user says otherwise.
- Avoid em dashes in site copy unless the user requests them.
- In narrative bios, the user sometimes wants project work referenced at the concept level or with short names rather than full formal titles.
- For the Research and Projects page intro, deepen research-specific detail while keeping a research-statement tone rather than a personal-homepage voice.
- After visible copy changes, verify wrapping on desktop and mobile so text does not overflow or look cramped.
- For portfolio or project cards the user wants gone, remove the underlying data entry rather than leaving a hidden or empty card.
- When the user caps length (for example about three sentences), keep expanded project blurbs within that limit.

## Learned Workspace Facts

- Homepage hero and long-form bio blocks are driven from `src/data/siteContent.js`; the Research landing intro string lives in `src/pages/Research.jsx`.
- Research project listings and section groupings are configured in `src/data/projects.js`.
- Conference and poster cards (including venue tags) are configured in `src/data/publications.js`.
- The previous expandable “Still curious?” UI is preserved under `src/archive/home-still-curious-archive.jsx` while the live button targets `#contact`.
- Verification in this repo is commonly done with `npm test`, `npm run build`, and `npm run lint`; `pnpm` may be unavailable in some agent shells.
