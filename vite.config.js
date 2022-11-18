import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
  plugins: [react()],
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
