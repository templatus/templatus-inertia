import { writable } from 'svelte/store';
import { router } from '@inertiajs/svelte';
import * as Routes from '@/routes';
import consumer from '@/channels/consumer';

import type { Subscription } from 'rails__actioncable';

let subscription: Subscription | null = null;

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
  // Clean up existing subscription if any
  stopCable();

  subscription = consumer.subscriptions.create(
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
    subscription = null;
  }
  subscribed.set(false);
}
