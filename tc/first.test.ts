// example.test.ts
import { sum } from './code1';

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('returns 0 when both arguments are 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('returns the same number when one argument is 0', () => {
    expect(sum(3, 0)).toBe(3);
    expect(sum(0, 5)).toBe(5);
  });
});
