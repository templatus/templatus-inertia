<script lang="ts">
  import { inertia, page } from '@inertiajs/inertia-svelte';
  import logoPath from '@/images/logo.svg';

  const tabs = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];
</script>

<header
  class="{$$props.class} flex items-end justify-between space-x-5 p-5 lg:flex-col lg:items-stretch lg:space-y-36 lg:space-x-0 lg:p-0"
>
  <img
    src={logoPath}
    alt="Logo"
    class="h-20 w-20 rounded bg-gradient-to-br from-slate-200 to-white p-3 lg:h-56 lg:w-56"
    width="150"
    height="150"
  />

  <nav
    class="flex space-x-5 text-center text-lg font-medium uppercase lg:flex-col lg:space-y-5 lg:space-x-0"
  >
    {#each tabs as tab}
      <a
        use:inertia
        href={tab.href}
        class="rounded-md px-2 py-1 lg:shadow {tab.href === $page.url
          ? 'bg-white text-rails-dark lg:bg-rails-dark lg:text-white'
          : 'bg-transparent text-white hover:bg-slate-300 hover:text-rails-dark lg:bg-white lg:text-rails-dark'}"
      >
        {tab.name}
      </a>
    {/each}
  </nav>
</header>
