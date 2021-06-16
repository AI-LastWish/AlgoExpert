export const kadanesAlgorithm = (array: number[]): number => {
  let maxCurrEnding = array[0], maxSoFar = array[0]
  for (let i = 1; i < array.length; i++) {
    maxCurrEnding = Math.max(array[i], maxCurrEnding + array[i])
    maxSoFar = Math.max(maxSoFar, maxCurrEnding)
  }
  return maxSoFar
}