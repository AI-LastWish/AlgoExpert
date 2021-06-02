// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  maxDiameter: number

  constructor(maxDiameter: number) {
    this.maxDiameter = maxDiameter
  }
}

const height = (root: BinaryTree | null, treeInfo:TreeInfo): number => {
  if (root === null) return 0
  let lh = height(root.left, treeInfo)
  let rh = height(root.right, treeInfo)
  treeInfo.maxDiameter = Math.max(treeInfo.maxDiameter, lh + rh)
  return Math.max(lh, rh) + 1
}

export function binaryTreeDiameter(tree: BinaryTree | null) {
  let treeInfo: TreeInfo = new TreeInfo(0)
  height(tree, treeInfo)
  return treeInfo.maxDiameter;
}

