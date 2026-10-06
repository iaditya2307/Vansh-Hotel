import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
function sitemapPlugin() {
  return {
    name: 'vansh-sitemap',
    generateBundle() {
      const site = (process.env.SITE_URL || '').replace(/\/$/, '');
      if (!site) return;
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), sitemapPlugin()],
  server: {
    port: 3000,
    host: true
  }
});
