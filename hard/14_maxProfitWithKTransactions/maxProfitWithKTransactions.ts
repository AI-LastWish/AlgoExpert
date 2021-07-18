export function maxProfitWithKTransactions(prices: number[], k: number) {
  if (prices.length === 0) return 0
  let prevProfits = new Array(prices.length).fill(0)
  const currProfits = new Array(prices.length).fill(0)

  for (let t = 1; t < k + 1; t++) {        
    let maxThusFar = -Infinity
    for (let d = 1; d < prices.length; d++) {
      maxThusFar = Math.max(maxThusFar, prevProfits[d - 1] - prices[d - 1])
      currProfits[d] = Math.max(currProfits[d - 1], maxThusFar + prices[d])
    }
    prevProfits = [...currProfits]
  }  
  return currProfits[currProfits.length - 1]
}
