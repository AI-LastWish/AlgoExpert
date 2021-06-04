export const maxSubsetSumNoAdjacent = (array: number[]): number => {
  if (array.length === 0) return 0
  if (array.length === 1) return array[0]

  let first = array[0], second = Math.max(first, array[1])
  let currSum = Math.max(first, second)

  for (let i = 2; i < array.length; i++) {
    currSum = Math.max(second, first + array[i])
    first = second
    second = currSum
  }

  return currSum
}