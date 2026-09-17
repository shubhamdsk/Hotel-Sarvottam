# हॉटेल सर्वोत्तम — Menu

The menu of Hotel Sarvottam Family Restaurant (Kokangaon, Tal. Sangamner, Dist. Ahilyanagar), as a
website and as four print-ready A3 cards.

The same content serves two very different outputs:

- **On paper** — four A3 portrait cards, laid out at their true size, printed straight from the
  browser.
- **On screen** — a single page: the hotel, the whole menu, and a search box that gathers matches
  from every section onto one list.

## Tech stack

| Concern    | Choice                                          |
| ---------- | ----------------------------------------------- |
| Framework  | React 19, function components and hooks          |
| Language   | TypeScript (strict, no `any`)                    |
| Build tool | Vite 8                                           |
| Styling    | SCSS modules-by-convention (`@use`, no CSS-in-JS)|
| Linting    | ESLint 9 flat config + typescript-eslint         |
| Hosting    | GitHub Pages, deployed by GitHub Actions         |

There are no UI libraries, no CSS frameworks and no state management library; the app does not need
them.

## Project structure

```
src/
├── App.tsx                 # composes the page: hero → toolbar → menu/results → gallery → footer
├── main.tsx                # mounts the app inside an error boundary
├── assets/                 # optimised WebP photos, SVG icons, wood texture (+ typed barrels)
├── components/
│   ├── branding/           # Wordmark, VegMark, ChefPortrait, Taglines
│   ├── layout/             # MenuCard, CardHeader, CardFooter, ClosingNote, MenuDocument
│   ├── menu/               # MenuSectionPanel, SectionBanner, DishRow, DishPriceTag, SearchResults
│   ├── site/               # SiteHero, PhotoGallery, SiteFooter  (screen only)
│   └── ui/                 # MenuToolbar, EmptyState, ErrorBoundary
├── constants/layout.ts     # A3 dimensions, breakpoint shared with SCSS
├── data/                   # the menu itself: sections, page composition, restaurant, contact
├── hooks/                  # useMenuFilter (search), useSheetScale (A3 preview)
├── styles/
│   ├── abstracts/          # design tokens + mixins (incl. the responsive switches)
│   ├── base/               # reset, accessibility, print
│   └── components/         # one partial per component
├── types/                  # MenuItem, MenuSection, RenderedPage …
└── utils/                  # price formatting, column splitting, search matching
```

Content never lives in a component. Adding a dish means editing `src/data/menuSections.ts`; moving a
section to another card means one line in `src/data/menuPages.ts`.

## Layout: two layouts, not one scaled layout

`src/styles/abstracts/_variables.scss` defines `$bp-sheet: 1200px`:

- **≥ 1200px and when printing** — the card is laid out at its true A3 size (297 × 420 mm) in
  millimetres. What is on screen is what comes out of the printer.
- **< 1200px** — the card drops the paper geometry and takes a web layout: fluid width, rem and
  clamp typography, two dish columns collapsing to one below 900px, and the English reading moving
  under the Marathi name below 600px. Nothing is scaled down; the layout changes.

`useSheetScale` only nudges the A3 preview to fit a wide window, and is pinned to 1 below the
breakpoint, so the two never fight. `SHEET_LAYOUT_MIN_PX` in `src/constants/layout.ts` must stay in
step with `$bp-sheet`.

## Local development

Requires Node 20 or newer.

```bash
npm install     # install dependencies
npm run dev     # start Vite on http://localhost:5173
```

Other commands:

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint .
npm run build       # production build into dist/
npm run preview     # serve the production build locally
```

To print: open the site on a desktop browser, press <kbd>Ctrl</kbd>+<kbd>P</kbd>, choose **A3**,
portrait, margins **None**, and enable **Background graphics**.

## GitHub repository setup

The project lives in [github.com/shubhamdsk/Hotel-Sarvottam](https://github.com/shubhamdsk/Hotel-Sarvottam)
and nothing else is published from this machine. Day to day:

```bash
git add .
git commit -m "…"
git push
```

## Deployment to GitHub Pages

`.github/workflows/deploy.yml` runs on every push to `main`: it installs dependencies, runs the
typecheck, the linter and the production build, then publishes `dist/` to Pages. The
`configure-pages` step carries `enablement: true`, so the very first run switches Pages on by
itself; no manual setting is needed.

Deployed URL:

```
https://shubhamdsk.github.io/Hotel-Sarvottam/
```

The repository name is the URL path. `REPOSITORY_NAME` in `vite.config.ts` must match it, or the
built assets will 404; a one-off build elsewhere can use `VITE_BASE=/new-name/ npm run build`, and a
user site (`shubhamdsk.github.io`) would use `/`.

## SEO and link previews

`vite.config.ts` contains a small `seo` plugin that, at build time:

- fills the absolute site URL into the canonical link and the Open Graph / Twitter tags;
- injects `Restaurant` JSON-LD built from `src/data/contact.ts` and `src/data/restaurant.ts`, so the
  address, phone, hours and rating a search engine reads are the same ones printed on the cards;
- emits `robots.txt` and `sitemap.xml` pointing at that URL.

`public/og-image.jpg` (1200 × 630) is the picture WhatsApp, Facebook and X show when the link is
shared — the hotel's own lit storefront, with its name on the sign.

## Notes

- Photographs are the restaurant's own, taken from its Google Business listing and re-encoded as
  WebP (the largest is ~100 KB).
- The crest, the vegetarian mark and the section icons are vector, so they print sharp at A3.
- The pure-veg declaration is made once, at the top of the site, rather than repeated on every card.
