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

export function invertBinaryTree(tree: BinaryTree | null) {
  if (tree === null) return null

  const temp = tree.left
  tree.left = tree.right
  tree.right = temp

  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
}
