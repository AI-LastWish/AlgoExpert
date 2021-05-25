const selectionSort = (array: number[]): number[] => {
  for (let i = 0; i < array.length - 1; i++) {
    let idx_min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[idx_min] > array[j]) {
        idx_min = j
      }
    }
    swap(array, idx_min, i)
  }
  return array
}

const swap = (array: number[], first: number, second: number): void => {
  let temp = array[first]
  array[first] = array[second]
  array[second] = temp
}