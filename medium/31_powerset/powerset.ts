export function powerset(array: number[]) {
  const subsets: number[][] = [[]]
  for (const el of array) {
    const length = subsets.length
    for (let i = 0; i < length; i++) {
      subsets.push(subsets[i].concat(el))
    }
  }
  return subsets
}