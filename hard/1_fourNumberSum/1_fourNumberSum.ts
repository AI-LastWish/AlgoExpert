type Quadruplet = [number, number, number, number]

export function fourNumberSum(array: number[], targetSum: number): Quadruplet[] {
  array.sort((a, b) => a - b)
  const quadruplet: Quadruplet[] = []

  for (let i = 0; i < array.length - 3; i++) {
    for (let j = i + 1; j < array.length - 2; j++) {
      let left = j + 1, right = array.length - 1
      while (left < right) {
        const sum = array[i] + array[j] + array[left] + array[right]
        if (sum === targetSum) {
          quadruplet.push([array[i], array[j], array[left], array[right]])
          left++
          right--
        } else if (sum < targetSum) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return quadruplet;
}
