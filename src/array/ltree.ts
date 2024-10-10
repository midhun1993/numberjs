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
      this.setShape(shape);
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
      this.analyzeTree();
    }
  }
  setTree(tree: any) {
    this.tree = tree;
  }
  getTree() {
    return this.tree;
  }
  setShape(shape: any, isPush: boolean = false) {
    if (isPush) {
      this.shape.push(shape);
    } else {
      this.shape = shape;
    }
  }
  getShape() {
    if (!this.shape) {
      this.analyzeTree();
    }
    return this.shape;
  }
  analyzeShape(tree: any) {
    if (!Array.isArray(tree)) {
      return;
    }
    this.setShape(tree.length, true);
    this.analyzeShape(tree[0]);
  }

  analyzeTree() {
    this.analyzeShape(this.tree);
  }
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
