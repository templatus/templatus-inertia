import { metaContent, assetUrl } from '@/utils/metaContent';

describe('metaContent', () => {
  beforeAll(() => {
    document.head.innerHTML = '<meta name="the-name" content="the-content">';
  });

  test('returns content when exists', () => {
    expect(metaContent('the-name')).toEqual('the-content');
  });

  test('returns undefined when missing', () => {
    expect(metaContent('this-does-not-exist')).toBeUndefined();
  });
});

describe('assetUrl', () => {
  test('adds asset host when exists', () => {
    document.head.innerHTML =
      '<meta name="asset-host" content="https://cdn.example.com">';

    expect(assetUrl('/assets/logo.svg')).toEqual(
      'https://cdn.example.com/assets/logo.svg',
    );
  });

  test('returns unchanged when missing', () => {
    document.head.innerHTML = '';

    expect(assetUrl('/assets/logo.svg')).toEqual('/assets/logo.svg');
  });
});
