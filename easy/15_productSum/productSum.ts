const productSum = (specialArr, multiplier = 1): number => {
  let sum = 0
  for (let i = 0; i < specialArr.length; i++) {
    if (Array.isArray(specialArr[i])) {
      sum += productSum(specialArr[i], multiplier + 1)
    } else {
      sum += specialArr[i]
    }
  }
  return sum * multiplier
}