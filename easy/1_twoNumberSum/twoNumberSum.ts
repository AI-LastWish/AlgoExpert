// Time Space: O(n)
export function twoNumberSum(array: number[], targetSum: number): number[] {
  let map = {}
  for (let i = 0; i < array.length; i++) {
    let complement = targetSum - array[i]
    if (array[i] in map) {
      return [array[i], map[array[i]]]
    }
    map[complement] = array[i]
  }
  return [];
}

// Time: O(nlogn), Space: O(1)
const solution2 = (array: number[], targetSum: number): number[] => {
  array.sort((a, b) => a - b)
  let left = 0, right = array.length - 1

  while (left < right) {
    let sum = array[left] + array[right]
    if (sum === targetSum) {
      return [array[left], array[right]]
    } else if (sum < targetSum) {
      left++
    } else {
      right--
    }
  }

  return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
console.log(twoNumberSum([4, 6], 10))
console.log(twoNumberSum([15], 15))
console.log(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5))
console.log(solution2([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5))