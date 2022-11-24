import { writable } from 'svelte/store';
import { createConsumer } from '@rails/actioncable';
import { router } from '@inertiajs/svelte';
import * as Routes from '@/routes';

import type { Subscription } from 'rails__actioncable';

let subscription: Subscription;

export type Click = {
  id: number;
  created_at: string;
  ip: string;
  user_agent: string;
};

export const currentItems = writable([] as Click[]);
export const currentTotal = writable(0);
export const subscribed = writable(false);

export function sendClick(): void {
  router.post(Routes.clicks());
}

export function startCable(): void {
  subscription = createConsumer().subscriptions.create(
    {
      channel: 'ClicksChannel',
    },
    {
      received: (click: Click) => {
        currentTotal.update((n) => n + 1);
        currentItems.update((items) => [click, ...items]);
      },
    },
  );
  subscribed.set(true);
}

export function stopCable(): void {
  if (subscription) {
    subscription.unsubscribe();
    subscription.consumer.disconnect();
  }
  subscribed.set(false);
}
