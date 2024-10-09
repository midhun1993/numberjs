import * as numjs from '../src/index';
describe('Something', () => {
  it('Do something', () => {
    let ndarray = numjs.ndarray([1, 2], 'int');
    console.log(ndarray);
    expect(1).toBe(1);
  });
});
