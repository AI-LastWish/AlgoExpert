const insertionSort = (array: number[]): number[] => {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      swap(array, i, j)
      j--
    }
  }
  return array
}

const swap = (array: number[], first: number, second: number): void => {
  let temp = array[first]
  array[first] = array[second]
  array[second] = temp
}