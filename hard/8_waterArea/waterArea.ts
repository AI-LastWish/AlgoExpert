export function waterArea(heights: number[]) {
  if (heights.length === 0) return 0

  let leftIdx = 0, rightIdx = heights.length - 1
  let leftMax = heights[leftIdx], rightMax = heights[rightIdx]
  let surfaceArea = 0

  while (leftIdx < rightIdx) {
    if (heights[leftIdx] < heights[rightIdx]) {
      leftIdx++
      leftMax = Math.max(leftMax, heights[leftIdx])
      surfaceArea += leftMax - heights[leftIdx]
    } else {
      rightIdx--
      rightMax = Math.max(rightMax, heights[rightIdx])
      surfaceArea += rightMax - heights[rightIdx]
    }
  }
  return surfaceArea
}
console.log(waterArea([4, 1, 3, 0, 10]))
