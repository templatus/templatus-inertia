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
    class="bg-rose hover:bg-rails-light active:ring-rails-light mt-3 w-full rounded-sm py-2 font-medium text-black transition hover:text-white active:ring-2 active:ring-offset-1 active:outline-hidden"
  >
    Click me!
  </button>

  <p class="mt-3 hidden text-center text-xs text-gray-600 sm:block">
    Tip: Open two browser windows in parallel and see what happens.
  </p>
</div>
