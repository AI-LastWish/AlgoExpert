const bubbleSort = (array: number[]): number[] => {
  let isSorted = false, n = array.length
  for (let i = 0; i < n - 1; i++) {
    isSorted = true
    for (let j = 0; j < n - 1 - i; j++) {		
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        isSorted = false
      }
    }
    if (isSorted) break
  }
  return array
}

const swap = (array: number[], first: number, second: number): void => {
  let temp = array[first]
  array[first] = array[second]
  array[second] = temp
}