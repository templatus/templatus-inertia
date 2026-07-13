import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import path from 'path';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [svelte(), svelteTesting()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'vendor/**'],
    setupFiles: './spec/javascript/setupTests.js',
    coverage: {
      // Keep out of SimpleCov's way: `coverage.clean` wipes this directory
      // on every run, which would take the Ruby report with it.
      reportsDirectory: './coverage/javascript',
    },
    server: {
      deps: {
        inline: [/^(?!.*vitest).*svelte.*/],
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app/javascript'),
    },
  },
});
