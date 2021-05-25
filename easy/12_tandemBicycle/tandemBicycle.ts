const tandemBicycle = (redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest: boolean): number => {
  redShirtSpeeds.sort((a, b) => a - b)
  blueShirtSpeeds.sort((a, b) => a - b)
  let result = 0

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    if (fastest) {
      result += Math.max(redShirtSpeeds[i], blueShirtSpeeds[redShirtSpeeds.length - 1 - i])
    } else {
      result += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
    }
  }

  return result
}