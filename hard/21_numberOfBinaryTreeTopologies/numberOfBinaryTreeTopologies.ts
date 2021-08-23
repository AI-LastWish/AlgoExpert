// Time: O(n^2), Space: O(n)

interface Cache {
  [n: number]: number
}

export function numberOfBinaryTreeTopologies(n: number, cache: Cache = { 0: 1 }) {
  if (n in cache) return cache[n]
  let numberOfTrees = 0
  for (let leftTreeSize = 0; leftTreeSize < n; leftTreeSize++) {
    const rightTreeSize = n - 1 - leftTreeSize
    numberOfTrees += numberOfBinaryTreeTopologies(leftTreeSize, cache) * numberOfBinaryTreeTopologies(rightTreeSize, cache)
  }
  cache[n] = numberOfTrees
  return numberOfTrees
}
