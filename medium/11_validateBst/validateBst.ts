// This is an input class. Do not edit.
class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function validateBst(tree: BST) {
  return helper(tree, -Infinity, Infinity)
}

const helper = (tree: BST, minVal: number, maxVal: number): boolean => {
  if (!tree) return true
  if (tree.value < minVal || tree.value >= maxVal) return false
  const leftIsValid = helper(tree.left, minVal, tree.value)
  const rightIsValid = helper(tree.right, tree.value, maxVal)
  return leftIsValid && rightIsValid
}