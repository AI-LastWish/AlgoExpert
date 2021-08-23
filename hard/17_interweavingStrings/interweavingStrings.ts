// O(nm) time | O(nm) Space
export function interweavingStrings(one: string, two: string, three: string) {
  if (three.length !== one.length + two.length)
    return false

  const cache: Array<boolean | null>[] = new Array(one.length + 1).fill(null).map(_ => new Array(two.length + 1).fill(null))

  return areInterwoven(one, two, three, 0, 0, cache)
}

const areInterwoven = (one: string, two: string, three: string, i: number, j: number, cache: Array<boolean | null>[]) => {
  if (cache[i][j] !== null) return cache[i][j]

  const k = i + j
  if (k === three.length)
    return true
  if (i < one.length && one[i] === three[k]) {
    cache[i][j] = areInterwoven(one, two, three, i + 1, j, cache)
    if (cache[i][j]) return true
  }
  if (j < two.length && two[j] === three[k]) {
    cache[i][j] = areInterwoven(one, two, three, i, j + 1, cache)
    return cache[i][j]
  }
  cache[i][j] = false
  return cache[i][j]
}
