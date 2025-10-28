import { metaContent } from '@/utils/metaContent';
import { router } from '@inertiajs/svelte';
import { init, track } from '@plausible-analytics/tracker';

const plausibleUrl = metaContent('plausible-url');
if (plausibleUrl) {
  init({
    domain: metaContent('app-host') || globalThis.location.host,
    endpoint: plausibleUrl,
    autoCapturePageviews: false,
    outboundLinks: true,
  });

  router.on('navigate', () => {
    track('pageview', {});
  });
}
