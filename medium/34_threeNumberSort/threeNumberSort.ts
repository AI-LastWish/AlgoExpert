export function threeNumberSort(array: number[], order: number[]) {
  let left = 0, right = array.length - 1, i = 0

  while (i <= right) {
    if (array[i] === order[0]) {
      swap(array, i, left)
      left++
    } else if (array[i] === order[2]) {
      swap(array, i, right)
      right--
      i--
    }
    i++
  }
  return array;
}

const swap = (array: number[], i: number, j: number) => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
