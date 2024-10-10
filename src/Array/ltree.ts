import { Shape } from './types';
import { random } from '../utils/random';

export class LTree {
  shape: Shape;
  tree: any;
  constructor(...parts: any[]) {
    let [shape = null, tree = null] = parts;
    let isTreeExist = false;
    let isTreeMetaExist = false;
    if (shape) {
      this.shape = shape;
      isTreeMetaExist = true;
    }

    if (tree) {
      this.tree = tree;
      isTreeExist = true;
    }
    if (!isTreeExist) {
      this.constructLogicTree();
    }
    if (!isTreeMetaExist) {
      this.extractMeta();
    }
  }
  setTree(tree: any) {
    this.tree = tree;
  }
  getTree() {
    return this.tree;
  }
  getShape(){
    
  }
  extractMeta() {}
  constructLogicTree() {
    let tree = [];
    let shapeLength = this.shape.length;
    for (let j = 0; j < shapeLength; j++) {
      let shapeElement = this.shape[j];
      let endOfShape = j + 1 == shapeLength;
      tree = this.updatedTree(tree, shapeElement, endOfShape);
    }
    this.setTree(tree);
  }
  updatedTree(tree: any, count: number, endOfShape: boolean): any[] {
    if (!Array.isArray(tree) || tree.length == 0) {
      tree = [];
      for (let j = 0; j < count; j++) {
        // We can randomly assign a value or can consume a buffer
        if (endOfShape) {
          tree[j] = random(0, 10);
        } else {
          tree[j] = [];
        }
      }
      return tree;
    }
    for (let i = 0; i < tree.length; i++) {
      tree[i] = this.updatedTree(tree[i], count, endOfShape);
    }
    return tree;
  }
}
