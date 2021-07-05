export function largestRange(array: number[]): [number, number] {
  const nums: { [key: number]: boolean } = {}
  let left = 0, right = 0
  let currLength = 0, longestLength = 0
  let res: [number, number] = [-1, -1]

  for (const num of array) {
    nums[num] = false
  }

  for (let i = 0; i < array.length; i++) {
    currLength = 1
    left = array[i] - 1
    right = array[i] + 1
    if (!(left in nums) && !(right in nums)) nums[array[i]] = true
    while (left in nums && !nums[left]) {
      nums[array[left]] = true
      left--
      currLength++
    }
    while (right in nums) {
      nums[array[right]] = true
      right++
      currLength++
    }
    if (currLength > longestLength) {
      longestLength = currLength
      res = [left + 1, right - 1]
    }
  }
  return res
}
