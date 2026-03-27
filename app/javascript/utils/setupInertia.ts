import { mount } from 'svelte';
import {
  createInertiaApp,
  http,
  type ResolvedComponent,
} from '@inertiajs/svelte';
import { metaContent } from '@/utils/metaContent';

const pages = import.meta.glob('../pages/**/*.svelte', { eager: true });

const csrfToken = metaContent('csrf-token');
if (csrfToken) {
  http.onRequest((config) => {
    config.headers = { ...config.headers, 'X-CSRF-Token': csrfToken };
    return config;
  });
}

createInertiaApp({
  resolve: (name: string) =>
    pages[`../pages/${name}.svelte`] as ResolvedComponent,

  setup({ el, App, props }) {
    mount(App, { target: el!, props });
  },
});
