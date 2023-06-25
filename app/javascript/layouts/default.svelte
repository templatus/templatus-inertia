<script lang="ts">
  import { page } from '@inertiajs/svelte';

  import AppBackground from '@/components/AppBackground.svelte';
  import AppHeader from '@/components/AppHeader.svelte';
  import AppFooter from '@/components/AppFooter.svelte';
  import AppFlash from '@/components/AppFlash.svelte';
</script>

<div
  class="flex min-h-screen flex-col bg-gradient-to-br from-rails-dark to-rails-light lg:bg-rose lg:from-inherit lg:to-inherit"
>
  <AppBackground />
  <AppHeader class="lg:fixed lg:left-10 lg:top-10" />
  <AppFlash flash={$page.props.flash} />

  <main
    class="relative flex-1 bg-white px-4 py-5 shadow-md sm:px-6 lg:ml-96 lg:mr-16 lg:mt-10 lg:max-w-5xl lg:rounded-xl lg:px-8"
  >
    <slot />
  </main>

  <AppFooter
    class="relative mb-6 mt-2 lg:ml-96 lg:mr-16 lg:max-w-5xl lg:px-0"
  />
</div>
