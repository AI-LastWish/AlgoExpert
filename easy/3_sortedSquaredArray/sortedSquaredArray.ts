// Time Space: O(n)
const sortedSquaredArray = (array: number[]): number[] => {
  let left = 0, right = array.length - 1
  let result = new Array(array.length).fill(0)
  let idx = array.length - 1

  while (left <= right) {
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      result[idx] = array[left] * array[left]
      left++
    } else {
      result[idx] = array[right] * array[right]
      right--
    }
    idx--
  }

  return result
}

// console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))
console.log(sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]))