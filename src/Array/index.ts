import { NDArray } from './ndarray';
import { Shape, DType } from './types';
export function ndarray(shape: Shape, dtype: DType): NDArray {
  let ndArray = new NDArray();
  ndArray.setShape(shape);
  ndArray.setDType(dtype);
  return ndArray;
}
