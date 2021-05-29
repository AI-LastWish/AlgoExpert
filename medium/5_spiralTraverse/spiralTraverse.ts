const spiralTraverse = (array: number[][]): number[] => {
  const spiral: number[] = []
  let startRow = 0, endRow = array.length - 1
  let startCol = 0, endCol = array[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      spiral.push(array[startRow][col])
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      spiral.push(array[row][endCol])
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      // Handle the edge case when there's a single row
      // in the middle of the matrix. In this case, we don't
      // want to double-count the values in this row, which
      // we've already counted in the first for loop above.
      if (startRow === endRow) break
      spiral.push(array[endRow][col])
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break
      spiral.push(array[row][startCol])
    }
    startRow++
    endRow--
    startCol++
    endCol--
  }
  return spiral
}