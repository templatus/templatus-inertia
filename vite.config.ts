import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import FullReload from 'vite-plugin-full-reload';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath, URL } from 'url';
import preprocess from 'svelte-preprocess';

export default defineConfig({
  optimizeDeps: {
    include: [
      '@inertiajs/inertia',
      '@inertiajs/inertia-svelte',
      '@inertiajs/progress',
      'axios',
    ],
  },
  plugins: [
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*']),
    svelte({
      experimental: {
        prebundleSvelteLibraries: true,
      },
      preprocess: preprocess({
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
