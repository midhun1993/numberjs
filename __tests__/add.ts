import { add } from '../src/index';

describe('sum function', () => {
  it('should return the correct sum', () => {
    expect(add(1, 2)).toBe(3);
  });
});
