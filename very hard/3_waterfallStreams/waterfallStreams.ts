export function waterfallStreams(array: number[][], source: number) {
  let rowAbove = [...array[0]]
  // -1: water, 1: block, 0: non-block
  rowAbove[source] = -1

  for (let row = 1; row < array.length; row++) {
    const currRow = [...array[row]]

    for (let i = 0; i < rowAbove.length; i++) {
      const valueAbove = rowAbove[i]
      const hasWaterAbove = valueAbove < 0
      const isBlock = currRow[i] === 1

      if (!hasWaterAbove) {
        continue
      }
      if (!isBlock) {
        // If current column is not a block, move the water down
        currRow[i] += valueAbove
        continue
      }

      const splitWater = valueAbove / 2

      // Move water right
      let rightIdx = i
      while (rightIdx + 1 < rowAbove.length) {
        rightIdx++

        // if there is a block in the way
        if (rowAbove[rightIdx] === 1) {
          break
        }

        // if there is no block on current Row
        if (currRow[rightIdx] !== 1) {
          currRow[rightIdx] += splitWater
          break
        }
      }

      // Move water left
      let leftIdx = i
      while (leftIdx - 1 >= 0) {
        leftIdx--

        // if there is a block in the way
        if (rowAbove[leftIdx] === 1) {
          break
        }

        // if there is no block on current Row
        if (currRow[leftIdx] !== 1) {
          currRow[leftIdx] += splitWater
          break
        }
      }
    }
    rowAbove = currRow
  }
  return rowAbove.map(num => (num < 0 ? num * -100 : num))
}
