import { mount } from 'svelte';
import axios from 'axios';
import { createInertiaApp } from '@inertiajs/svelte';
import { metaContent } from '@/utils/metaContent';

const pages = import.meta.glob('../pages/**/*.svelte', { eager: true });

axios.defaults.headers.common['X-CSRF-Token'] = metaContent('csrf-token');

createInertiaApp({
  resolve: (name: string) => pages[`../pages/${name}.svelte`],

  setup({ el, App, props }) {
    mount(App, { target: el, props });
  },
});
