export const minNumberOfCoinsForChange = (n: number, denoms: number[]): number => {
  const numberOfCoins: number[] = new Array(n + 1).fill(Infinity)
  numberOfCoins[0] = 0
  for (const denom of denoms) {
    for (let amount = 0; amount <= n; amount++) {
      if (denom <= amount) {
        numberOfCoins[amount] = Math.min(numberOfCoins[amount], 1 + numberOfCoins[amount - denom])
      }
    }
  }
  return numberOfCoins[n] !== Infinity ? numberOfCoins[n] : -1
}