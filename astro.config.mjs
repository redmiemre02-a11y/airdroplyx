// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://airdroplyx.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr", "ru", "es", "hi", "id", "vi", "pt", "zh", "tl"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});