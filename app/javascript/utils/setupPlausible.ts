import { metaContent } from '@/utils/metaContent';
import { router } from '@inertiajs/svelte';
import Plausible from 'plausible-tracker';

const plausibleUrl = metaContent('plausible-url');
if (plausibleUrl) {
  const plausible = Plausible({
    domain: metaContent('app-host') || window.location.host,
    apiHost: plausibleUrl,
  });

  plausible.enableAutoOutboundTracking();

  router.on('navigate', () => {
    plausible.trackPageview();
  });
}
