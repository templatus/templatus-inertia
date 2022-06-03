import axios from 'axios';
import { metaContent } from '@/utils/metaContent';
import { createInertiaApp } from '@inertiajs/inertia-svelte';
import { InertiaProgress } from '@inertiajs/progress';
import Plausible from 'plausible-tracker';

let plausible: any;
const plausibleUrl = metaContent('plausible-url');
if (plausibleUrl) {
  plausible = Plausible({
    domain: metaContent('app-host'),
    apiHost: plausibleUrl,
  });
}

const pages = import.meta.globEager('../pages/**/*.svelte');

axios.defaults.headers.common['X-CSRF-Token'] = metaContent('csrf-token');

InertiaProgress.init({
  showSpinner: true,
});

createInertiaApp({
  resolve: (name: string) => {
    if (plausible) plausible.trackPageview();

    return pages[`../pages/${name}.svelte`];
  },
  setup({ el, App, props }) {
    // eslint-disable-next-line no-new
    new App({ target: el, props });
  },
});
