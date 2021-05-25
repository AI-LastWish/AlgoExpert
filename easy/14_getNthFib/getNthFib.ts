const getNthFib = (n: number): number => {
  if (n < 2) return n - 1
  let first = 0, second = 1, temp = 0
  for (let i = 2; i < n; i++) {
    temp = first + second
    first = second
    second = temp
  }
  return second
}

console.log(getNthFib(6))