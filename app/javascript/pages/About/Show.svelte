<script lang="ts" context="module">
  import Layout from '@/layouts/default.svelte';
  export const layout = Layout;
</script>

<script lang="ts">
  import PageTitle from '@/components/PageTitle.svelte';
  import Check from 'tabler-icons-svelte/icons/Check.svelte';

  export let features;
</script>

<PageTitle>About</PageTitle>

<p class="mt-6 max-w-4xl text-base lg:text-xl">
  Templatus is an opinionated template for web applications with
  <b>Ruby on Rails</b> and <b>Inertia</b>
</p>

<div class="mt-20 space-y-24">
  {#each features as group}
    <div class="lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div>
        <h2
          class="text-base font-semibold uppercase tracking-wide text-rails-dark"
        >
          {group.slogan}
        </h2>
        <p class="mt-2 text-3xl font-extrabold text-gray-900">
          {group.name}
        </p>
      </div>
      <div class="mt-12 lg:col-span-2 lg:mt-0">
        <dl
          class="space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8"
        >
          {#each group.items as feature}
            <div class="relative">
              <dt>
                <div class="absolute h-6 w-6 text-svelte" aria-hidden="true">
                  <Check />
                </div>

                <p
                  class="ml-9 flex items-center text-lg font-medium leading-6 text-rails-dark"
                >
                  <a
                    href={feature.href}
                    class="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {feature.name}
                  </a>

                  {#if feature.version}
                    <span
                      class="ml-2 inline-flex items-center rounded-full bg-rose py-0.5 px-2.5 text-xs font-medium text-black"
                    >
                      {feature.version}
                    </span>
                  {/if}
                </p>
              </dt>
              <dd class="mt-2 ml-9 text-base text-gray-600">
                {@html feature.description}
              </dd>
            </div>
          {/each}
        </dl>
      </div>
    </div>
  {/each}
</div>
