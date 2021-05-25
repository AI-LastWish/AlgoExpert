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

const findClosestValueInBst = (tree: BST, target: number): number => {
  let currNode = tree, closet = tree.value

  while (currNode !== null) {
    if (closet - target === 0) return closet
    if (Math.abs(currNode.value - target) < Math.abs(closet - target))
      closet = currNode.value
    if (currNode.value < target)
      currNode = currNode.right
    else
      currNode = currNode.left
  }

  return closet
}