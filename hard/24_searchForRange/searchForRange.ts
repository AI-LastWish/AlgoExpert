type Range = [number, number];

export function searchForRange(array: number[], target: number): Range {
  const res: Range = [-1, -1]

  res[0] = findIdx(array, target, true)
  res[1] = findIdx(array, target, false)
  return res
}

const findIdx = (array: number[], target: number, lower: boolean): number => {
  let idx = -1, left = 0, right = array.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (lower) {
      if (target <= array[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (array[mid] <= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    if (array[mid] === target) idx = mid
  }

  return idx
}
