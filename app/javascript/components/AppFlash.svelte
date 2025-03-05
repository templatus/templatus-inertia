<script lang="ts">
  import { fly } from 'svelte/transition';
  import { IconAlertCircle, IconCircleCheck } from '@tabler/icons-svelte';

  export let flash = {
    notice: '',
    alert: '',
  };

  let text: string = '';
  let icon: typeof IconAlertCircle | typeof IconCircleCheck;
  let backgroundClass: string;
  let textClass: string;
  let iconClass: string;
  let timeoutId: ReturnType<typeof setTimeout>;

  function showMessage(type: 'notice' | 'alert', message: string) {
    text = message;
    if (type === 'notice') {
      icon = IconCircleCheck;
      textClass = 'text-green-800';
      iconClass = 'text-green-400';
      backgroundClass = 'bg-green-50 border-green-500';
    } else {
      icon = IconAlertCircle;
      textClass = 'text-red-800';
      iconClass = 'text-red-400';
      backgroundClass = 'bg-red-50 border-red-500';
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      text = '';
    }, 2000);
  }

  $: if (flash.notice) {
    showMessage('notice', flash.notice);
  }

  $: if (flash.alert) {
    showMessage('alert', flash.alert);
  }
</script>

{#if text}
  <div
    id="flash"
    class="fixed inset-x-0 bottom-0 z-50 border-t-4 p-8 {backgroundClass}"
    transition:fly={{ y: 128, duration: 500 }}
  >
    <div class="mx-auto flex items-center justify-center">
      <div class={iconClass}>
        <svelte:component this={icon} size={32} />
      </div>

      <p class="ml-2 text-base font-medium {textClass}">
        {text}
      </p>
    </div>
  </div>
{/if}
