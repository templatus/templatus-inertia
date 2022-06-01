<script lang="ts">
  import { onMount } from 'svelte';
  import * as timeago from 'timeago.js';

  let timeElement: HTMLElement;

  onMount(() => {
    timeago.render(timeElement);

    return () => timeago.cancel(timeElement);
  });

  export let commitVersion: string;
  export let commitTime: string;
</script>

<div>
  <code class="text-sm">{commitVersion}</code>
  <b class="ml-3"><time bind:this={timeElement} datetime={commitTime} /></b>
</div>
