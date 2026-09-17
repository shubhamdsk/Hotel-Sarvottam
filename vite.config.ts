import { fileURLToPath, URL } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { CONTACT } from './src/data/contact';
import { RESTAURANT } from './src/data/restaurant';

/**
 * The repository this site is published from.  GitHub Pages serves a project
 * site under `/<repository>/`, so the production bundle has to be built with
 * that prefix; `npm run dev` keeps serving from the root.
 *
 * Override with `VITE_BASE=/other-name/ npm run build` if the repository is
 * ever renamed, or set it to `/` for a user site (`<user>.github.io`).
 */
const REPOSITORY_NAME = 'Hotel-Sarvottam';
const SITE_ORIGIN = 'https://shubhamdsk.github.io';

/**
 * Search engines and link previews need absolute URLs and a machine-readable
 * description of the restaurant. Both are built here, from the same data the
 * cards are printed from, so they can never drift out of step with the menu.
 */
function seo(siteUrl: string): Plugin {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: `${RESTAURANT.prefix} ${RESTAURANT.name} ${RESTAURANT.kind}`,
    alternateName: `Hotel ${RESTAURANT.nameEn} ${RESTAURANT.kindEn}`,
    description: 'शुद्ध शाकाहारी फॅमिली रेस्टॉरंट — Pure vegetarian family restaurant.',
    url: siteUrl,
    image: `${siteUrl}og-image.jpg`,
    telephone: CONTACT.phone.tel,
    servesCuisine: ['Maharashtrian', 'North Indian', 'Chinese', 'Pure Vegetarian'],
    priceRange: '₹₹',
    hasMenu: siteUrl,
    sameAs: [CONTACT.mapsUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kokangaon',
      addressLocality: 'Sangamner',
      addressRegion: 'Maharashtra',
      postalCode: '413714',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '12:00',
        closes: '23:30',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: CONTACT.rating.score,
      reviewCount: CONTACT.rating.reviews,
    },
  };

  return {
    name: 'sarvottam-seo',
    transformIndexHtml(html) {
      return html
        .replaceAll('%SITE_URL%', siteUrl)
        .replace(
          '</head>',
          `  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>\n  </head>`,
        );
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`,
      });

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          `  <url>\n    <loc>${siteUrl}</loc>\n    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n` +
          `</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ command }) => {
  const base = process.env.VITE_BASE ?? (command === 'build' ? `/${REPOSITORY_NAME}/` : '/');

  return {
    base,
    plugins: [react(), seo(`${SITE_ORIGIN}${base}`)],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: true,
      port: 5180,
    },
    preview: {
      host: true,
      port: 5180,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      // the section icons are a few hundred bytes each: inlining them keeps the
      // printed card from waiting on dozens of round trips
      assetsInlineLimit: 8 * 1024,
    },
  };
});
