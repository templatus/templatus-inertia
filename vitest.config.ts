import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'vendor/**'],
    setupFiles: './spec/javascript/setupTests.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app/javascript'),
    },
  },
});
