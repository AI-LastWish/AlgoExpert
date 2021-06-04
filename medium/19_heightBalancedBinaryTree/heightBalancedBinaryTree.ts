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
  isBalanced: boolean
  height: number
  constructor(isBalanced: boolean, height: number) {
    this.isBalanced = isBalanced
    this.height = height
  }
}

export function heightBalancedBinaryTree(tree: BinaryTree | null): boolean {
  let treeInfo = getTreeInfo(tree)
  return treeInfo.isBalanced;
}

const getTreeInfo = (node: BinaryTree | null): TreeInfo => {
  if (node === null) return new TreeInfo(true, -1)

  let leftSubTreeInfo = getTreeInfo(node.left)
  let rightSubTreeInfo = getTreeInfo(node.right)

  let isBalanced = leftSubTreeInfo.isBalanced && rightSubTreeInfo.isBalanced && Math.abs(leftSubTreeInfo.height - rightSubTreeInfo.height) <= 1
  let height = Math.max(leftSubTreeInfo.height, rightSubTreeInfo.height) + 1

  return new TreeInfo(isBalanced, height)
}
