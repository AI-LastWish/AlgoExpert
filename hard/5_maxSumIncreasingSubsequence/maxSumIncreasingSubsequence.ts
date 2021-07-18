export function maxSumIncreasingSubsequence(array: number[]): [number, number[]] {
  const sequences: number[] = new Array(array.length)
  const sums: number[] = array.map(num => num)
  let maxSumIdx = 0

  for (let i = 0; i < array.length; i++) {
    const currSum = array[i]

    for (let j = 0; j < i; j++) {
      const prevSum = array[j]
      if (prevSum < currSum && sums[j] + currSum >= sums[i]) {
        sums[i] = sums[j] + currSum
        sequences[i] = j
      }
    }

    if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i
  }

  return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)]
}

const buildSequence = (array: number[], sequences: number[], currIdx: number) => {
  const sequence: number[] = []
  while (currIdx !== undefined) {
    sequence.unshift(array[currIdx])
    currIdx = sequences[currIdx]
  }
  return sequence
}

console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30]))