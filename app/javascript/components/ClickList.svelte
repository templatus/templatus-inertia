<script lang="ts">
  import type { Click } from '@/stores/clicks';
  import { flip } from 'svelte/animate';
  import { fade, scale } from 'svelte/transition';

  export let clicks: Click[];

  function formattedDate(click: Click) {
    return new Date(click.created_at).toLocaleString('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
  }
</script>

<ul class="text-sm md:text-base">
  {#each clicks as click (click.id)}
    <li
      class="bg-white py-5"
      animate:flip={{ duration: 200 }}
      in:scale|local={{ duration: 200, delay: 200 }}
      out:fade|local={{ duration: 200 }}
    >
      <p>
        <span class="rounded bg-gray-900 px-2 py-1 font-mono text-rose">
          {click.ip}
        </span>

        <span class="ml-2 px-1 font-medium text-gray-900">
          {formattedDate(click)}
        </span>
      </p>

      <code class="mt-4 block font-extralight text-gray-500">
        {click.user_agent}
      </code>
    </li>
  {/each}
</ul>
