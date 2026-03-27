<script lang="ts">
  import * as timeago from 'timeago.js';

  let timeElement: HTMLElement;

  $effect(() => {
    timeago.render(timeElement);

    return () => timeago.cancel(timeElement);
  });

  const {
    commitVersion,
    commitTime,
  }: { commitVersion: string; commitTime: string } = $props();
</script>

<div>
  <code class="text-sm">{commitVersion}</code>
  <b class="ml-3">
    <time bind:this={timeElement} datetime={commitTime}></time>
  </b>
</div>
