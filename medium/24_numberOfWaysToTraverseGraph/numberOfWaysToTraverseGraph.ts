export const numberOfWaysToTraverseGraph2 = (width: number, height: number): number => {
  if (width === 1 || height === 1) return 1
  return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1)
}

export const numberOfWaysToTraverseGraph = (width: number, height: number): number => {
  let ways: number[][] = Array.from(Array(height), _ => Array(width).fill(0))
  for (let i = 0; i < width; i++) ways[height-1][i] = 1
  for (let i = 0; i < height; i++) ways[i][width-1] = 1
  for (let i = height - 2; i >= 0; i--) {
    for (let j = width - 2; j >= 0; j--) {
      ways[i][j] = ways[i][j + 1] + ways[i + 1][j]
    }
  }
  return ways[0][0]
}