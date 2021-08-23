function totalNQueens(n: number): number {
  let res: number[] = [0]
  let board: string[][] = new Array(n).fill('').map(_ => new Array(n).fill('.'))

  solve(board, n, 0, res)
  return res[0]
};

const isPossible = (board: string[][], n: number, row: number, col: number): boolean => {
  // check in row and col
  for (let i = 0; i < n; i++) {
    if (board[row][i] === 'Q' || board[i][col] === 'Q')
      return false
  }

  // check from board[i][j] to top left corner
  let i = row, j = col
  while (i >= 0 && j >= 0) {
    if (board[i][j] === 'Q') {
      return false
    }
    i--
    j--
  }

  // check from board[i][j] to bottom right corner
  i = row, j = col
  while (i < n && j < n) {
    if (board[i][j] === 'Q') {
      return false
    }
    i++
    j++
  }

  // check from board[i][j] to bottom left corner
  i = row, j = col
  while (i < n && j >= 0) {
    if (board[i][j] === 'Q') {
      return false
    }
    i++
    j--
  }

  // check from board[i][j] to top right corner
  i = row, j = col
  while (i >= 0 && j < n) {
    if (board[i][j] === 'Q') {
      return false
    }
    i--
    j++
  }

  return true
}

const solve = (board: string[][], n: number, row: number, res: number[]) => {
  if (row === n) {
    res[0]++
    return
  }

  for (let i = 0; i < n; i++) {
    if (isPossible(board, n, row, i)) {
      board[row][i] = 'Q'
      solve(board, n, row + 1, res)
      board[row][i] = '.'
    }
  }
}