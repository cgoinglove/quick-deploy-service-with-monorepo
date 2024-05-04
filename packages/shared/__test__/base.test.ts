import { expect, test } from 'vitest';
import * as BASE from '../src';

test('base', () => {
  const zero = BASE.autoIncrement();
  const one = BASE.autoIncrement();
  const two = BASE.autoIncrement();

  expect([zero, one, two]).toEqual([0, 1, 2]);
});
