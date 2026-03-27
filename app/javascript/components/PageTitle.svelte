<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

<h1
  class="text-rails-dark text-4xl font-extrabold tracking-tight break-words sm:text-5xl lg:text-6xl"
>
  {@render children()}
</h1>
