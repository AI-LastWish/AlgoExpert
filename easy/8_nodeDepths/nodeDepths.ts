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

const nodeDepths = (root: BinaryTree, depth = 0): number => {
  if (!root) return 0
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}