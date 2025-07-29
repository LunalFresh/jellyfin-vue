import { test, expect } from 'vitest';
import { testSel } from '../src/utils/testSelectors';

test('returns data-test attribute object', () => {
  expect(testSel('foo')).toEqual({ 'data-test': 'foo' });
});
