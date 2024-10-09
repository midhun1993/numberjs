import { Shape, DType } from './types';
import * as util from 'util';
export class NDArray {
  shape: number[];
  dtype: DType;

  constructor(shape?: Shape, dtype?: DType) {
    if (shape) {
      this.setShape(shape);
    }
    if (dtype) {
      this.setDType(dtype);
    }
  }

  setShape(shape: Shape) {
    this.shape = shape;
  }

  setDType(dtype: DType) {
    this.dtype = dtype;
  }

  buildArray() {
    let arr = []
    for(let pos =0 ; pos < this.shape.length; pos++){
      let shapeElem = this.shape[pos];
      
    }
  }

  /**
   * This function will override the existing console.log behavior
   * @param depth
   * @param opts
   * @returns
   */
  [util.inspect.custom](depth: any, opts: any) {
    return [1, 2];
  }
}
