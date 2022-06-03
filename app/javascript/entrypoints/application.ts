import axios from 'axios';
import { metaContent } from '@/utils/metaContent';
import { Inertia } from '@inertiajs/inertia';
import { createInertiaApp } from '@inertiajs/inertia-svelte';
import { InertiaProgress } from '@inertiajs/progress';
import Plausible from 'plausible-tracker';

const plausibleUrl = metaContent('plausible-url');
if (plausibleUrl) {
  const plausible = Plausible({
    domain: metaContent('app-host'),
    apiHost: plausibleUrl,
  });

  plausible.enableAutoOutboundTracking();

  Inertia.on('navigate', () => {
    plausible.trackPageview();
  });
}

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
