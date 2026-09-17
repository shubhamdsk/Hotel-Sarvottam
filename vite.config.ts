import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * The repository this site is published from.  GitHub Pages serves a project
 * site under `/<repository>/`, so the production bundle has to be built with
 * that prefix; `npm run dev` keeps serving from the root.
 *
 * Override with `VITE_BASE=/other-name/ npm run build` if the repository is
 * ever renamed, or set it to `/` for a user site (`<user>.github.io`).
 */
const REPOSITORY_NAME = 'Sarvottam-Menu-React';

export default defineConfig(({ command }) => ({
  base: process.env.VITE_BASE ?? (command === 'build' ? `/${REPOSITORY_NAME}/` : '/'),
  plugins: [react()],
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
}));
