<script lang="ts" context="module">
  import Layout from '@/layouts/default.svelte';
  export const layout = Layout;
</script>

<script lang="ts">
  import PageTitle from '@/components/PageTitle.svelte';

  export let status: number;

  const ERROR_MESSAGES = {
    404: "The page you were looking for doesn't exist",
    422: 'The change you wanted was rejected',
    500: "We're sorry, but something went wrong",
  };
</script>

<PageTitle>Error {status}</PageTitle>

<p class="mt-6 max-w-4xl text-base lg:text-xl">
  {ERROR_MESSAGES[status] || 'Unknown Error'}
</p>
