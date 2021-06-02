// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number, left: BST | null = null, right: BST | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
  rootIdx: number

  constructor(rootIdx: number) {
    this.rootIdx = rootIdx
  }
}

export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  let treeInfo=new TreeInfo(0)
  return reconstructBstHelper(preOrderTraversalValues, -Infinity, Infinity, treeInfo)
}

const reconstructBstHelper = (preOrderTraversalValues: number[], min: number, max: number, treeInfo: TreeInfo): BST | null => {
  if (treeInfo.rootIdx === preOrderTraversalValues.length) return null

  const rootVal = preOrderTraversalValues[treeInfo.rootIdx]
  if (rootVal < min || rootVal >= max) return null

  treeInfo.rootIdx++
  const leftSubTree = reconstructBstHelper(preOrderTraversalValues, min, rootVal, treeInfo)
  const rightSubTree = reconstructBstHelper(preOrderTraversalValues, rootVal, max, treeInfo)

  return new BST(rootVal, leftSubTree, rightSubTree)
}
