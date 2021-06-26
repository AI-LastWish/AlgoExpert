export const staircaseTraversal = (height: number, maxSteps: number): number => {
  if (maxSteps === 1) return 1
  if (height < 2) return height
  let steps = [1, 1]
  for (let i = 2; i <= height; i++) {
    let curr = 0
    for (let j = i - 1; j > i - 1 - maxSteps && j >= 0; j--) {
      curr += steps[j]
    }
    steps.push(curr)
  }
  return steps[height]
}

console.log(staircaseTraversal(15, 5))