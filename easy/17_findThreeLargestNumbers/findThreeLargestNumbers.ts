const findThreeLargestNumbers = (array: number[]): number[] => {
  let first = Number.NEGATIVE_INFINITY, second = Number.NEGATIVE_INFINITY, third = Number.NEGATIVE_INFINITY
  for (let i = 0; i < array.length; i++) {
    if (array[i] > first) {
      third = second
      second = first
      first = array[i]
    } else if (array[i] > second) {
      third = second
      second = array[i]
    } else if (array[i] > third) {
      third = array[i]
    }
  }
  return [third, second, first]
}