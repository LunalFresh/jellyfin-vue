/**
 * Helper to create `data-test` attributes for easier unit test selectors.
 *
 * @param id - Identifier for the test selector.
 * @returns Object containing the `data-test` attribute.
 */
export const testSel = (id: string) => ({ 'data-test': id });
