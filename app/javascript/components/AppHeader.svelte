<script lang="ts">
  import { assetUrl } from '@/utils/metaContent';
  import { inertia, page } from '@inertiajs/svelte';
  import logoPath from '@/images/logo.svg';
  import * as Routes from '@/routes';

  const tabs = [
    { name: 'Home', href: Routes.root() },
    { name: 'About', href: Routes.about() },
  ];
</script>

<header
  class="{$$props.class} flex items-end justify-between space-x-5 p-5 lg:flex-col lg:items-stretch lg:space-y-36 lg:space-x-0 lg:p-0"
>
  <img
    src={assetUrl(logoPath)}
    alt="Logo"
    class="h-20 w-20 rounded-sm bg-linear-to-br from-slate-200 to-white p-2 lg:h-56 lg:w-56 lg:p-3"
    width="150"
    height="150"
  />

  <nav
    class="flex space-x-5 text-center text-lg font-medium uppercase lg:flex-col lg:space-y-5 lg:space-x-0"
  >
    {#each tabs as tab (tab.name)}
      <a
        use:inertia
        href={tab.href}
        class="rounded-md px-2 py-1 transition lg:shadow-sm {tab.href ===
        $page.url
          ? 'text-rails-dark lg:bg-rails-dark bg-white lg:text-white'
          : 'lg:text-rails-dark bg-transparent text-white hover:scale-105 lg:bg-white'}"
      >
        {tab.name}
      </a>
    {/each}
  </nav>
</header>
