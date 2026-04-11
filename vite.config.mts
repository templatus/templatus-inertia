import { defineConfig } from 'vite';
import ViteRails from 'vite-plugin-rails';
import tailwindcss from '@tailwindcss/vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  plugins: [
    tailwindcss(),
    ViteRails({
      fullReload: {
        additionalPaths: ['config/routes.rb', 'app/views/**/*'],
      },
    }),
    svelte({
      prebundleSvelteLibraries: true,
      preprocess: vitePreprocess(),
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app/javascript'),
    },
  },
  server: {
    hmr: {
      host: 'vite.templatus-inertia.test',
      clientPort: 443,
    },
  },
});
