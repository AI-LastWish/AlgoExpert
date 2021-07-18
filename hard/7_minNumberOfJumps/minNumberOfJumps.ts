export function minNumberOfJumps(array: number[]) {
  let jumps: number[] = new Array(array.length).fill(Infinity)
  jumps[0] = 1
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= i - j) {
        jumps[i] = Math.min(jumps[j] + 1, jumps[i])
      }
    }
  }
  return jumps[array.length - 1];
}

export function minNumberOfJumps2(array: number[]) {
  if (array.length < 2) return 0
  let jumps = 0, maxReach = array[0], steps = array[0]

  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, array[i] + i)
    steps--
    if (steps === 0) {
      jumps++
      steps = maxReach - i
    }
  }
  return jumps + 1
}
