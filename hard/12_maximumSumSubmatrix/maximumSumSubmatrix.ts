export function maximumSumSubmatrix(matrix: number[][], size: number) {
  const sums = createSumMatrix(matrix)

  let maxSubMatrixSum = -Infinity

  for (let row = size - 1; row < matrix.length; row++) {
    for (let col = size - 1; col < matrix[row].length; col++) {
      let total = sums[row][col]

      const touchesTopBorder = row - size < 0
      if (!touchesTopBorder) {
        total -= sums[row - size][col]
      }

      const touchesLeftBorder = col - size < 0
      if (!touchesLeftBorder) {
        total -= sums[row][col - size]
      }

      if (!touchesTopBorder && !touchesLeftBorder) {
        total += sums[row - size][col - size]
      }

      maxSubMatrixSum = Math.max(maxSubMatrixSum, total)
    }
  }
  return maxSubMatrixSum
}

const createSumMatrix = (matrix: number[][]) => {
  let sums = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0))
  sums[0][0] = matrix[0][0]

  // fill the first row
  for (let i = 1; i < matrix[0].length; i++) {
    sums[0][i] = sums[0][i - 1] + matrix[0][i]
  }

  // fill the first column
  for (let i = 1; i < matrix.length; i++) {
    sums[i][0] = sums[i - 1][0] + matrix[i][0]
  }

  // fill the rest of the matrix
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[row].length; col++) {
      sums[row][col] = sums[row - 1][col] + sums[row][col - 1] - sums[row - 1][col - 1] + matrix[row][col]
    }
  }

  return sums
}
