import { Shape, DType } from './types';
import * as util from 'util';
import { LTree } from './ltree';

/**
 * Define the constants
 */
const ROOT_ELEMENT_COUNT = 1;
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

  get ndim() {
    return this.shape.length;
  }

  setShape(shape: Shape) {
    this.shape = shape;
  }

  setDType(dtype: DType) {
    this.dtype = dtype;
  }

  buildArray() {
    let shape = this.shape;
    let ltree = new LTree(shape);
    return ltree.getTree();
  }

  setArray(ndarray: any) {
    if (!Array.isArray(ndarray)) {
      throw Error('Invalid array');
    }
    let tree = ndarray;
    let ltree = new LTree(tree);
    let shape = ltree.getShape();
  }

  [util.inspect.custom](depth: any, opts: any) {
    return this.buildArray();
  }
}
