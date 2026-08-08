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
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: false, // pl at /, en at /en/
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: { pl: 'pl-PL', en: 'en' },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
