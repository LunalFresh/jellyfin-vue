export function normalizeServerUrl(url: string): string {
  let normalized = url.trim();
  if (!/^https?:\/\//i.test(normalized)) {
    normalized = `http://${normalized}`;
  }
  normalized = normalized.replace(/\/+$/, '');
  return normalized;
}

export function isValidServerUrl(url: string): boolean {
  try {
    // new URL throws if invalid
    void new URL(normalizeServerUrl(url));
    return true;
  } catch {
    return false;
  }
}

import { defineStore } from 'pinia';

/**
 * Normalize a Jellyfin server URL by trimming whitespace, removing trailing
 * slashes and ensuring a protocol is present.
 *
 * @param url - Raw server URL input
 * @returns Normalized server URL
 */
export function normalizeServerUrl(url: string): string {
  let value = url.trim();
  // remove trailing slashes
  value = value.replace(/\/+$/, '');
  // prepend protocol if missing
  if (!/^https?:\/\//i.test(value) && value !== '') {
    value = `http://${value}`;
  }
  return value;
}

export const useServerStore = defineStore('server', {
  state: () => ({
    url: ''
  }),
  actions: {
    setUrl(newUrl: string) {
      this.url = normalizeServerUrl(newUrl);
    }
  }
});