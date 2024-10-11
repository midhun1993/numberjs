import * as numjs from '../src/index';
describe('N-dimensional Array', () => {
  it('ndim: using ndarray', () => {
    let ndarray = numjs.ndarray([1, 2, 5, 8, 9]);
    expect(ndarray.ndim).toBe(5);
  });

  it('ndim: using array', () => {
    let ndarray = numjs.array([
      [1, 2],
      [3, 4],
    ]);
    expect(ndarray.ndim).toBe(2);
  });

  it('ndim: invalid ndim check', () => {
    let array = numjs.array([
      [1, 2],
      [3, 4],
    ]);
    expect(array.ndim).not.toBe(1);
  });

  it('size: valid check', () => {
    let array = numjs.array([
      [1, 2],
      [3, 4],
    ]);
    expect(array.size).toBe(4);
  });
});
