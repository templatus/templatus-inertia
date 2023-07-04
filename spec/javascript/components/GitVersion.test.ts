import { render } from '@testing-library/svelte';
import GitVersion from '@/components/GitVersion.svelte';

describe('GitVersion', () => {
  test('renders version', () => {
    const { getByText } = render(GitVersion, {
      props: {
        commitVersion: 'v0.0.1-123-7654321',
        commitTime: '2021-06-01T12:00:00+02:00',
      },
    });

    expect(getByText('v0.0.1-123-7654321')).toBeInTheDocument();
  });
});
