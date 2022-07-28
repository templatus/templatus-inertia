import { waitFor, render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import GitVersion from '@/components/GitVersion.svelte';

describe('GitVersion', () => {
  test('renders version', async () => {
    const { getByText } = render(GitVersion, {
      target: document.body,
      props: {
        commitVersion: 'v0.0.1-123-7654321',
        commitTime: '2021-06-01T12:00:00+02:00',
      },
    });

    await waitFor(() =>
      expect(getByText('v0.0.1-123-7654321')).toBeInTheDocument(),
    );

    expect(getByText('v0.0.1-123-7654321')).toBeInTheDocument();
  });
});
