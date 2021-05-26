const isMonotonic = (array: number[]): boolean => {
  let isNonIncreasing = true, isNonDecreasing = true
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) isNonIncreasing = false
    if (array[i] < array[i - 1]) isNonDecreasing = false
  }
  return isNonIncreasing || isNonDecreasing
}