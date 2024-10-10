import { NDArray } from './ndarray';
import { Shape, DType } from './types';
export function ndarray(shape: Shape, dtype?: DType): NDArray {
  let ndArray = new NDArray();
  ndArray.setShape(shape);
  //ndArray.setDType(dtype);
  return ndArray;
}

//Todo : Should rewrite the type definitions

export function array(ndarray: any[]) {
  let ndArray = new NDArray();
  ndArray.setArray(ndarray);
  return ndArray;
}
