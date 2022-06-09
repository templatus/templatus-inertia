import axios from 'axios';
import { createInertiaApp } from '@inertiajs/inertia-svelte';
import { InertiaProgress } from '@inertiajs/progress';
import { metaContent } from '@/utils/metaContent';

const pages = import.meta.globEager('../pages/**/*.svelte');

axios.defaults.headers.common['X-CSRF-Token'] = metaContent('csrf-token');

InertiaProgress.init({
  showSpinner: true,
});

createInertiaApp({
  resolve: (name: string) => pages[`../pages/${name}.svelte`],

  setup({ el, App, props }) {
    // eslint-disable-next-line no-new
    new App({ target: el, props });
  },
});
