class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const branchSums = (root: BinaryTree): number[] => {
  const sums = []
  calBranchSums(root, 0, sums)
  return sums
}

const calBranchSums = (node: BinaryTree, currSum: number, sums: number[]): void => {
  if (!node) return
  currSum += node.value
  if (!node.left && !node.right)
    sums.push(currSum)
  calBranchSums(node.left, currSum, sums)
  calBranchSums(node.right, currSum, sums)
}