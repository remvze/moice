import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

import { dependencies } from './package.json';

const renderChunks = deps => {
  const chunks = {};

  Object.keys(deps).forEach(key => {
    if (['react', 'react-dom', 'react-router-dom'].includes(key)) return;

    chunks[key] = [key];
  });

  return chunks;
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Moice',
        short_name: 'Moice',
        start_url: '/',
        display: 'standalone',
        background_color: '#080808',
        theme_color: '#080808',
        lang: 'en',
        scope: '/',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
