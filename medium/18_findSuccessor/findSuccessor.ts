// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  if (node.right !== null) return getLeftmostChild(node.right)
  return getRightmostParent(node)
}

const getLeftmostChild = (node: BinaryTree): BinaryTree => {
  let currNode = node
  while (currNode.left != null)
    currNode = currNode.left
  return currNode
}

const getRightmostParent = (node: BinaryTree): BinaryTree => {
  let currNode = node
  while (currNode.parent !== null && currNode.parent.right === currNode)
    currNode = currNode.parent
  return currNode.parent
}
