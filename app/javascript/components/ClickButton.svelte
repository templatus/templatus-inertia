<script lang="ts">
  import { sendClick } from '@/stores/clicks';
  import { scale } from 'svelte/transition';

  export let count: number;
</script>

<div class="{$$props.class} flex flex-col">
  <div id="counter" class="text-center">
    {#key count}
      <div
        class="text-5xl font-bold"
        in:scale={{
          duration: 500,
        }}
      >
        {count.toLocaleString()}
      </div>
    {/key}
    <div class="py-1 uppercase">Clicks</div>
  </div>

  <button
    type="button"
    on:click={sendClick}
    class="mt-3 w-full rounded bg-rose py-2 font-medium text-black transition hover:bg-rails-light hover:text-white active:outline-none active:ring-2 active:ring-rails-light active:ring-offset-1"
  >
    Click me!
  </button>

  <p class="mt-3 hidden text-center text-xs text-gray-600 sm:block">
    Tip: Open two browser windows in parallel and see what happens.
  </p>
</div>
