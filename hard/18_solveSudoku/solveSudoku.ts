export function solveSudoku(board: number[][]) {
  solvePartialSudoku(0, 0, board)
  return board
}

const solvePartialSudoku = (row: number, col: number, board: number[][]): boolean => {
  let currRow = row, currCol = col

  if (currCol === board[currRow].length) {
    currRow++
    currCol = 0
    if (currRow === board.length) return true
  }

  if (board[currRow][currCol] === 0) {
    return tryDigitsAtPosition(currRow, currCol, board)
  }

  return solvePartialSudoku(currRow, currCol + 1, board)
}

const tryDigitsAtPosition = (row: number, col: number, board: number[][]): boolean => {
  for (let digit = 1; digit < 10; digit++) {
    if (isValidAtPosition(digit, row, col, board)) {
      board[row][col] = digit
      if (solvePartialSudoku(row, col + 1, board)) return true
    }
  }

  board[row][col] = 0
  return false
}

const isValidAtPosition = (value: number, row: number, col: number, board: number[][]): boolean => {
  const rowIsValid = !board[row].includes(value)
  const colIsValid = !board.map(r => r[col]).includes(value)

  if (!rowIsValid || !colIsValid) return false

  // check subgrid constraint
  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const rowToCheck = Math.floor(row / 3) * 3 + rowIdx
      const colToCheck = Math.floor(col / 3) * 3 + colIdx

      if (board[rowToCheck][colToCheck] === value) return false
    }
  }

  return true
}
