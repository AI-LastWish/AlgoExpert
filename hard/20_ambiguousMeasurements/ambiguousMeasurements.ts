export function ambiguousMeasurements(measuringCups: number[][], low: number, high: number) {
  const memorization: { [key: string]: boolean } = {}
  return canMeasureInRange(measuringCups, low, high, memorization)
}

const canMeasureInRange = (measuringCups: number[][], low: number, high: number, memorization: { [key: string]: boolean }): boolean => {
  const memoizeKey = createHashtableKey(low, high)
  if (memoizeKey in memorization)
    return memorization[memoizeKey]

  if (low <= 0 && high <= 0)
    return false

  let canMeasure = false
  for (const cup of measuringCups) {
    const [cupLow, cupHigh] = cup
    if (low <= cupLow && cupHigh <= high) {
      canMeasure = true
      break
    }

    canMeasure = canMeasureInRange(measuringCups, low - cupLow, high - cupHigh, memorization)
    if (canMeasure)
      break
  }

  memorization[memoizeKey] = canMeasure
  return canMeasure
}

const createHashtableKey = (low: number, high: number): string => {
  return `${low}:${high}`
}
