import { metaContent } from '@/utils/metaContent';
import { Inertia } from '@inertiajs/inertia';
import Plausible from 'plausible-tracker';

const plausibleUrl = metaContent('plausible-url');
if (plausibleUrl) {
  const plausible = Plausible({
    domain: metaContent('app-host') || window.location.host,
    apiHost: plausibleUrl,
  });

  plausible.enableAutoOutboundTracking();

  Inertia.on('navigate', () => {
    plausible.trackPageview();
  });
}
