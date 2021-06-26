export function getPermutations(array: number[]) {
  const permutations: number[][] = []
  helper(0, array, permutations)
  return permutations
}

const helper = (i: number, array: number[], permutations: number[][]) => {
  if (i === array.length - 1) {
    permutations.push(array.slice())
  } else {
    for (let j = i; j < array.length; j++) {
      swap(array, i, j)
      helper(i + 1, array, permutations)
      swap(array, i, j)
    }
  }
}

const swap = (array: number[], i: number, j: number) => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
