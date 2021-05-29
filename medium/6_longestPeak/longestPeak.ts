const longestPeak = (array: number[]): number => {
  let peaks: number[] = []
  let longestP = 0

  // find all peaks
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      peaks.push(i)
    }
  }

  for (let i = 0; i < peaks.length; i++) {
    let leftIdx = peaks[i] - 1
    let rightIdx = peaks[i] + 1
    let currP = 3
    while (leftIdx >= 1 && array[leftIdx] > array[leftIdx - 1]) {
      currP++
      leftIdx--
    }
    while (rightIdx <= array.length - 2 && array[rightIdx] > array[rightIdx + 1]) {
      currP++
      rightIdx++
    }
    if (currP > longestP)
      longestP = currP
  }

  return longestP
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))