export function minHeightBst(array: number[]): BST {
  return constructMinHeightBst(array, 0, array.length - 1)
}

const constructMinHeightBst = (array: number[], startIdx: number, endIdx: number): BST => {
  if (endIdx < startIdx) return null
  const midIdx = Math.floor(startIdx + (endIdx - startIdx) / 2)
  const bst = new BST(array[midIdx])
  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1)
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx)
  return bst
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}