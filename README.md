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

The project is published from the repository **`Sarvottam-Menu-React`** under
[github.com/shubhamdsk](https://github.com/shubhamdsk). The Vite `base` is derived from that name,
so the repository must keep it (or `VITE_BASE` must be set to match).

Create the repository on GitHub (empty, no README), then from this folder:

```bash
git init
git add .
git commit -m "Hotel Sarvottam menu: React + TypeScript + Vite"
git branch -M main
git remote add origin https://github.com/shubhamdsk/Sarvottam-Menu-React.git
git push -u origin main
```

## Deployment to GitHub Pages

`.github/workflows/deploy.yml` runs on every push to `main`: it installs dependencies, runs the
typecheck, the linter and the production build, then publishes `dist/` to Pages.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Deployed URL:

```
https://shubhamdsk.github.io/Sarvottam-Menu-React/
```

If the repository is ever renamed, either update `REPOSITORY_NAME` in `vite.config.ts` or build with
`VITE_BASE=/new-name/ npm run build`; for a user site (`shubhamdsk.github.io`) set the base to `/`.

## Notes

- Photographs are the restaurant's own, taken from its Google Business listing and re-encoded as
  WebP (the largest is ~100 KB).
- The crest, the vegetarian mark and the section icons are vector, so they print sharp at A3.
- The pure-veg declaration is made once, at the top of the site, rather than repeated on every card.
