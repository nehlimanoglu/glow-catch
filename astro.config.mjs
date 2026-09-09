import { defineConfig } from 'astro/config';

// Static output for GitHub Pages at the apex domain. `site` gives absolute URLs
// to the sitemap and canonical tags; the CNAME and .nojekyll files live in
// public/ so the build copies them into dist/ on every run — Pages needs both
// and a build that forgets either takes the custom domain down.
export default defineConfig({
  site: 'https://hst123.website',
  output: 'static',
  build: { format: 'file' },
});
