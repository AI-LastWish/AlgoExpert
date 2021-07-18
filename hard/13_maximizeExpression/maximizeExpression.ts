export function maximizeExpression(array: number[]) {
  if (array.length < 4) return 0

  const maxOfA = new Array(1).fill(array[0])
  const maxOfAmB = new Array(1).fill(-Infinity)
  const maxOfAmBpC = new Array(2).fill(-Infinity)
  const maxOfAmBpCmD = new Array(3).fill(-Infinity)

  for (let i = 1; i < array.length; i++) {
    const max = Math.max(maxOfA[i - 1], array[i])
    maxOfA.push(max)
  }
  for (let i = 1; i < array.length; i++) {
    const max = Math.max(maxOfAmB[i - 1], maxOfA[i - 1] - array[i])
    maxOfAmB.push(max)
  }
  for (let i = 2; i < array.length; i++) {
    const max = Math.max(maxOfAmBpC[i - 1], maxOfAmB[i - 1] + array[i])
    maxOfAmBpC.push(max)
  }
  for (let i = 3; i < array.length; i++) {
    const max = Math.max(maxOfAmBpCmD[i - 1], maxOfAmBpC[i - 1] - array[i])
    maxOfAmBpCmD.push(max)
  }
  return maxOfAmBpCmD[maxOfAmBpCmD.length - 1]
}
