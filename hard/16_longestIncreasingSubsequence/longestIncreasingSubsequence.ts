export function longestIncreasingSubsequence(array: number[]) {
  const sequences: number[] = new Array(array.length)
  const lengths: number[] = new Array(array.length).fill(1)
  let maxLengthIdx = 0

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] < array[i] && lengths[j] + 1 >= lengths[i]) {
        lengths[i] = lengths[j] + 1
        sequences[i] = j
      }
    }
    if (lengths[i] >= lengths[maxLengthIdx]) maxLengthIdx = i
  }
  return buildSequence(array, sequences, maxLengthIdx)
}

const buildSequence = (array: number[], sequences: number[], maxLengthIdx: number) => {
  const res: number[] = []
  while (maxLengthIdx !== undefined) {
    res.unshift(array[maxLengthIdx])
    maxLengthIdx = sequences[maxLengthIdx]
  }
  return res
}
