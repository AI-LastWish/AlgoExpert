const minimumWaitingTime = (queries: number[]): number => {
  let sorted = queries.sort((a, b) => a - b)
  let curr = 0, sum = 0
  for (let i = 1; i < sorted.length; i++) {
    curr += sorted[i - 1]
    sum += curr
  }
  return sum
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]))