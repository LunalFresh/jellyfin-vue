import { describe, expect, it } from 'vitest';
import { normalizeServerUrl, isValidServerUrl } from '#/stores/server';

describe('normalizeServerUrl', () => {
  it('adds http scheme if missing', () => {
    expect(normalizeServerUrl('example.com')).toBe('http://example.com');
  });

  it('removes trailing slashes', () => {
    expect(normalizeServerUrl('https://example.com/')).toBe('https://example.com');
  });
});

describe('isValidServerUrl', () => {
  it('accepts valid urls', () => {
    expect(isValidServerUrl('http://example.com')).toBe(true);
    expect(isValidServerUrl('https://example.com')).toBe(true);
  });

  it('rejects invalid urls', () => {
    expect(isValidServerUrl('not a url')).toBe(false);
  });
});
