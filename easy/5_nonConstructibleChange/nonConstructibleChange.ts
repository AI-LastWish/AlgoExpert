const nonConstructibleChange = (coins: number[]): number => {
  coins.sort((a, b) => a - b)
  let changes = 0

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > changes + 1) return changes + 1
    changes += coins[i]
  }

  return changes + 1
}