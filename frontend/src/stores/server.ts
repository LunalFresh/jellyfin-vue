import { defineStore } from 'pinia';

/**
 * Normalize a Jellyfin server URL by trimming whitespace, removing trailing
 * slashes and ensuring a protocol is present.
 *
 * @param url - Raw server URL input
 * @returns Normalized server URL
 */
export function normalizeServerUrl(url: string): string {
  let normalized = url.trim();
  normalized = normalized.replace(/\/+$/, '');
  if (!/^https?:\/\//i.test(normalized) && normalized !== '') {
    normalized = `http://${normalized}`;
  }
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
