const classPhotos = (redShirtHeights: number[], blueShirtHeights: number[]): boolean => {
  redShirtHeights.sort((a, b) => b - a)
  blueShirtHeights.sort((a, b) => b - a)
  let taller = redShirtHeights[0] >= blueShirtHeights[0] ? 'RED' : 'BLUE'

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (taller === 'RED' && redShirtHeights[i] <= blueShirtHeights[i])
      return false
    if (taller === 'BLUE' && blueShirtHeights[i] <= redShirtHeights[i])
      return false
  }
  return true
}