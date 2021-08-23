export function shiftedBinarySearch(array: number[], target: number) {
  return helper(array, target, 0, array.length - 1)
}

const helper = (array: number[], target: number, left: number, right: number): number => {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (target === array[middle])
      return middle
    else if (array[left] <= array[middle]) {
      if (array[left] <= target && target < array[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    } else {
      if (array[middle] < target && target <= array[right]) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }
  }
  return -1
}
