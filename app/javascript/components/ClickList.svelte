<script lang="ts">
  import type { Click } from '@/stores/clicks';
  import { flip } from 'svelte/animate';
  import { quintOut } from 'svelte/easing';

  export let clicks: Click[];

  function formattedDate(click: Click) {
    return new Date(click.created_at).toUTCString();
  }
</script>

<ul>
  {#each clicks as click (click.id)}
    <li
      class="bg-white py-4"
      animate:flip={{ duration: 500, easing: quintOut }}
    >
      <p>
        <span class="rounded bg-gray-900 py-1 px-2 font-mono text-rose">
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
