import { defineConfig } from 'astro/config';
import vitePWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://amgh.github.io',
  integrations: [
    vitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: '一个迷你游戏中心 | A Mini Game Hub',
        short_name: 'MiniHub',
        description: '轻松有趣的网页小游戏合集 / Fun web mini-games',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}']
      }
    })
  ],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});