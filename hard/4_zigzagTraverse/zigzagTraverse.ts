export function zigzagTraverse(array: number[][]) {
  const height = array.length - 1, width = array[0].length - 1
  const res: number[] = []
  let row = 0, col = 0
  let goingDown = true

  while (!outOfBound(row, col, height, width)) {
    res.push(array[row][col])
    if (goingDown) {
      if (col === 0 || row === height) {
        goingDown = false
        if (row === height) {
          col++
        } else {
          row++
        }
      } else {
        row++
        col--
      }
    } else {
      if (col === width || row === 0) {
        goingDown = true
        if (col === width) {
          row++
        } else {
          col++
        }
      } else {
        row--
        col++
      }
    }
  }
  return res
}

const outOfBound = (row: number, col: number, height: number, width: number): boolean => {
  return row < 0 || row > height || col < 0 || col > width
}

console.log(zigzagTraverse([[1, 2, 3, 4, 5]]))