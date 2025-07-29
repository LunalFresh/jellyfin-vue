import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';
import { normalizeServerUrl, useServerStore } from '../src/stores/server.ts';

describe('normalizeServerUrl', () => {
  it('trims whitespace', () => {
    expect(normalizeServerUrl('  http://example.com  ')).toBe('http://example.com');
  });

  it('removes trailing slashes', () => {
    expect(normalizeServerUrl('http://example.com/')).toBe('http://example.com');
  });

  it('adds protocol when missing', () => {
    expect(normalizeServerUrl('example.com')).toBe('http://example.com');
  });

  it('keeps existing protocol', () => {
    expect(normalizeServerUrl('https://example.com')).toBe('https://example.com');
  });
});

describe('useServerStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('stores normalized server url', () => {
    const store = useServerStore();
    store.setUrl(' example.com/ ');
    expect(store.url).toBe('http://example.com');
  });
});
