import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import FullReload from 'vite-plugin-full-reload';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath, URL } from 'url';
import { sveltePreprocess } from 'svelte-preprocess';

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
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
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*']),
    svelte({
      prebundleSvelteLibraries: true,
      preprocess: sveltePreprocess({
        postcss: true,
      }),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./app/javascript', import.meta.url)),
    },
  },
  server: {
    hmr: {
      host: 'vite.templatus-inertia.test',
      clientPort: 443,
    },
  },
});
