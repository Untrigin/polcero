// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://polcero.com',
  output: 'static', // pages stay prerendered; only /api/contact opts into SSR
  adapter: node({ mode: 'standalone' }),
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    routing: {
      prefixDefaultLocale: false, // en at /, other locales at /xx/
      redirectToDefaultLocale: false,
    },
  },

  // EN became the primary locale served at "/". The old English home lived at
  // "/en/"; redirect it to root. Nested "/en/<path>/" URLs are redirected at the
  // reverse proxy (see deploy/nginx-polcero.conf) because Astro dynamic
  // redirects require a matching catch-all destination route.
  redirects: {
    '/en/': '/',
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', pl: 'pl-PL' },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
