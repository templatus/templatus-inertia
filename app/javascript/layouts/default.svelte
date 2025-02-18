<script lang="ts">
  import { page } from '@inertiajs/svelte';

  import AppBackground from '@/components/AppBackground.svelte';
  import AppHeader from '@/components/AppHeader.svelte';
  import AppFooter from '@/components/AppFooter.svelte';
  import AppFlash from '@/components/AppFlash.svelte';
</script>

<div
  class="from-rails-dark to-rails-light lg:bg-rose flex min-h-screen flex-col bg-linear-to-br lg:from-inherit lg:to-inherit"
>
  <AppBackground />
  <AppHeader class="lg:fixed lg:top-10 lg:left-10" />
  <AppFlash flash={$page.props.flash} />

  <main
    class="relative flex-1 bg-white px-4 py-5 shadow-md sm:px-6 lg:mt-10 lg:mr-16 lg:ml-96 lg:max-w-5xl lg:rounded-xl lg:px-8"
  >
    <slot />
  </main>

  <AppFooter
    class="relative mt-2 mb-6 lg:mr-16 lg:ml-96 lg:max-w-5xl lg:px-0"
  />
</div>
