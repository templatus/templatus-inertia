<script lang="ts">
  import { fly } from 'svelte/transition';
  import { IconAlertCircle, IconCircleCheck } from '@tabler/icons-svelte';

  type Flash = { notice?: string; alert?: string };
  const { flash = {} }: { flash?: Flash } = $props();

  let text: string = $state('');
  let isNotice: boolean = $state(true);

  const backgroundClass = $derived(
    isNotice ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500',
  );
  const textClass = $derived(isNotice ? 'text-green-800' : 'text-red-800');
  const iconClass = $derived(isNotice ? 'text-green-400' : 'text-red-400');

  $effect(() => {
    if (flash.notice) {
      text = flash.notice;
      isNotice = true;
    } else if (flash.alert) {
      text = flash.alert;
      isNotice = false;
    }
  });

  // Auto-dismiss after 2 seconds
  $effect(() => {
    if (!text) return;

    const id = setTimeout(() => {
      text = '';
    }, 2000);

    return () => clearTimeout(id);
  });
</script>

{#if text}
  <div
    id="flash"
    class="fixed inset-x-0 bottom-0 z-50 border-t-4 p-8 {backgroundClass}"
    transition:fly={{ y: 128, duration: 500 }}
  >
    <div class="mx-auto flex items-center justify-center">
      <div class={iconClass}>
        {#if isNotice}
          <IconCircleCheck size={32} />
        {:else}
          <IconAlertCircle size={32} />
        {/if}
      </div>

      <p class="ml-2 text-base font-medium {textClass}">
        {text}
      </p>
    </div>
  </div>
{/if}
