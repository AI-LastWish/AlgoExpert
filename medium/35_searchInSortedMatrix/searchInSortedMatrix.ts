type Range = [number, number];

export function searchInSortedMatrix(matrix: number[][], target: number): Range {
  let row = 0, col = matrix[0].length - 1
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target)
      return [row, col]
    else if (matrix[row][col] > target)
      col--
    else
      row++
  }
  return [-1, -1];
}
