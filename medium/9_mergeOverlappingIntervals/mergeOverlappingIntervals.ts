const mergeOverlappingIntervals = (array: number[][]): number[][] => {
  array.sort((a, b) => a[0] - b[0])
  let output: number[][] = []

  let currInterval: number[] = array[0]
  for (let i = 1; i < array.length; i++) {
    let nextInterval = array[i]
    if (currInterval[1] >= nextInterval[0]) {
      currInterval[1] = Math.max(currInterval[1], nextInterval[1])
      if (i === array.length - 1) {
        output.push(currInterval)
      }
    } else {
      output.push(currInterval)
      currInterval = nextInterval
      if (i === array.length - 1) {
        output.push(nextInterval)
      }
    }
  }

  return output
}