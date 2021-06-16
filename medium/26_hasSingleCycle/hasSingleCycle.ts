export function hasSingleCycle(array: number[]) {
  let numElVisited = 0, currIdx = 0
  while (numElVisited < array.length) {
    if (numElVisited > 0 && currIdx === 0) return false
    numElVisited++
    currIdx = getNextIdx(currIdx, array)
  }
  return currIdx === 0
}

const getNextIdx = (currIdx: number, array: number[]): number => {
  const nextIdx = (currIdx + array[currIdx]) % array.length
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length
}
