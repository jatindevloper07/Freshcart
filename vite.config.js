import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures assets load properly on any domain, subpath, or static host (Vercel, Netlify, GitHub Pages)
});
