export function knapsackProblem(items: [number, number][], capacity: number): [number, number[]] {
  const dp: number[][] = []
  for (let i = 0; i < items.length + 1; i++) {
    const row = new Array(capacity + 1).fill(0)
    dp.push(row)
  }

  for (let i = 1; i < items.length + 1; i++) {
    const currWeight = items[i - 1][1], currVal = items[i - 1][0]

    for (let c = 0; c < capacity + 1; c++) {
      if (currWeight > c) {
        dp[i][c] = dp[i - 1][c]
      } else {
        dp[i][c] = Math.max(dp[i - 1][c], dp[i - 1][c - currWeight] + currVal)
      }
    }
  }

  return [dp[items.length][capacity], getDpItems(dp, items)]
}

const getDpItems = (dp: number[][], items: [number, number][]) => {
  const sequence: number[] = []
  let i = dp.length - 1, j = dp[0].length - 1

  while (i > 0) {
    if (dp[i][j] === dp[i - 1][j]) {
      i--
    } else {
      let currVal = items[i - 1][1]
      sequence.unshift(i - 1)
      j -= currVal
      i--
    }
  }

  return sequence
}
