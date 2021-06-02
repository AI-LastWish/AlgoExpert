export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  noOfNodesVisited: number
  lastedVisitedNodeVal: number

  constructor(noOfNodesVisited: number, lastedVisitedNodeVal: number) {
    this.noOfNodesVisited = noOfNodesVisited
    this.lastedVisitedNodeVal = lastedVisitedNodeVal
  }
}

export function findKthLargestValueInBst(tree: BST, k: number) {
  let treeInfo = new TreeInfo(0, -1)
  reverseInOrderTraverse(tree, k, treeInfo)
  return treeInfo.lastedVisitedNodeVal
}

const reverseInOrderTraverse = (tree: BST | null, k: number, treeInfo: TreeInfo) => {
  if (tree === null || treeInfo.noOfNodesVisited >= k) return

  reverseInOrderTraverse(tree.right, k, treeInfo)
  if (treeInfo.noOfNodesVisited < k) {
    treeInfo.noOfNodesVisited++
    treeInfo.lastedVisitedNodeVal = tree.value
    reverseInOrderTraverse(tree.left, k, treeInfo)
  }
}