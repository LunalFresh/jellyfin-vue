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
