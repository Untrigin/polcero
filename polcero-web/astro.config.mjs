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
    locales: ['en', 'pl', 'de', 'fr', 'es', 'it', 'pt', 'nl'],
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
    // The 4 specialized-robot products were merged into one "Specialized robots" product.
    '/products/quadruped-robot/': '/products/specialized-robots/',
    '/products/tracked-robot/': '/products/specialized-robots/',
    '/products/wheeled-robot/': '/products/specialized-robots/',
    '/products/wheel-leg-robot/': '/products/specialized-robots/',
    '/pl/products/quadruped-robot/': '/pl/products/specialized-robots/',
    '/pl/products/tracked-robot/': '/pl/products/specialized-robots/',
    '/pl/products/wheeled-robot/': '/pl/products/specialized-robots/',
    '/pl/products/wheel-leg-robot/': '/pl/products/specialized-robots/',
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', pl: 'pl-PL', de: 'de', fr: 'fr', es: 'es', it: 'it', pt: 'pt', nl: 'nl' },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
