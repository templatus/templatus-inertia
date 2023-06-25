<script lang="ts" context="module">
  import Layout from '@/layouts/default.svelte';
  export const layout = Layout;
</script>

<script lang="ts">
  import type { Click } from '@/stores/clicks';
  import { onMount } from 'svelte';
  import {
    startCable,
    stopCable,
    currentItems,
    currentTotal,
  } from '@/stores/clicks';

  import PageTitle from '@/components/PageTitle.svelte';
  import ClickButton from '@/components/ClickButton.svelte';
  import ClickList from '@/components/ClickList.svelte';

  export let items: Click[];
  export let total: number;

  // Save the current items and total (if given) to the store
  if (items) currentItems.set(items);
  if (total) currentTotal.set(total);

  onMount(() => {
    startCable();

    return () => {
      stopCable();
    };
  });
</script>

<div class="lg:mr-64">
  <PageTitle>Hello, Templatus!</PageTitle>

  <p class="mt-6 max-w-4xl text-base lg:text-xl">
    Templatus is an opinionated template for web applications with
    <b>Ruby on Rails</b> and <b>Inertia</b> using <b>Svelte.js</b>
  </p>
</div>

<ClickButton
  class="mt-5 w-full lg:absolute lg:-right-10 lg:-top-5 lg:mt-0 lg:w-56 lg:rounded lg:bg-gradient-to-br lg:from-slate-100 lg:to-white lg:p-3 lg:shadow"
  count={$currentTotal}
/>

{#if $currentItems.length}
  <h2
    class="mt-20 text-center text-xl font-medium uppercase tracking-wide text-rails-dark sm:text-left"
  >
    Latest clicks
  </h2>

  <ClickList clicks={$currentItems.slice(0, 5)} />
{/if}
