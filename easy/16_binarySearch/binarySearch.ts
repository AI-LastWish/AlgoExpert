const binarySearch = (array: number[], target: number): number => {
  return binarySearchHelper(array, target, 0, array.length - 1)
}

const binarySearchHelper = (array: number[], target: number, left: number, right: number): number => {
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (array[mid] === target) {
      return mid
    } else if (array[mid] > target) {
      return binarySearchHelper(array, target, left, mid - 1)
    } else {
      return binarySearchHelper(array, target, mid + 1, right)
    }
  }

  return -1
}