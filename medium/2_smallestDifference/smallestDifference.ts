const smallestDifference = (arrayOne: number[], arrayTwo: number[]): number[] => {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)
  let idxOne = 0, idxTwo = 0, curr = Infinity, smallest = Infinity
  let smallestPairs: number[] = []

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let first = arrayOne[idxOne], second = arrayTwo[idxTwo]
    if (first > second) {
      curr = first - second
      idxTwo++
    } else if (first < second) {
      curr = second - first
      idxOne++
    } else {
      return [first, second]
    }
    if (smallest > curr) {
      smallest = curr
      smallestPairs = [first, second]
    }
  }

  return smallestPairs
}