type Triplet = [number, number, number]

const threeNumberSum = (array: number[], targetSum: number): Triplet[] => {
  array.sort((a, b) => a - b)
  const triplets: Triplet[] = []

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1, right = array.length - 1
    while (left < right) {
      const sum = array[i] + array[left] + array[right]
      if (sum === targetSum) {
        triplets.push([array[i], array[left], array[right]])
        left++
        right--
      } else if (sum < targetSum) {
        left++
      } else {
        right--
      }
    }
  }

  return triplets
}