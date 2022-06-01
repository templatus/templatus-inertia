import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import FullReload from 'vite-plugin-full-reload';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { brotliCompressSync } from 'zlib';
import gzipPlugin from 'rollup-plugin-gzip';
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
    // Create gzip copies of relevant assets
    gzipPlugin(),
    // Create brotli copies of relevant assets
    gzipPlugin({
      customCompression: (content) => brotliCompressSync(Buffer.from(content)),
      fileName: '.br',
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
