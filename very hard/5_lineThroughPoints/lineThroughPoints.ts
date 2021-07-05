export function lineThroughPoints(points: number[][]) {
  let maxPointsOnLine = 1

  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i]
    const slopes: { [slode: string]: number } = {}

    for (let j = i + 1; j < points.length; j++) {
      const p2 = points[j]
      const [rise, run] = getSlopeOf2Points(p1, p2)
      const slopeKey = createSlopeKey(rise, run)
      if (!(slopeKey in slopes)) slopes[slopeKey] = 1

      slopes[slopeKey]++
    }

    const currMaxPointsOnLine = Object.values(slopes).reduce((a, b) => Math.max(a, b), 0)
    maxPointsOnLine = Math.max(currMaxPointsOnLine, maxPointsOnLine)
  }
  return maxPointsOnLine
}

const getSlopeOf2Points = (p1: number[], p2: number[]) => {
  const [p1x, p1y] = p1
  const [p2x, p2y] = p2
  let slope = [1, 0] // slope of a vertical line

  // if line is not vertical
  if (p1x !== p2x) {
    let xDiff = p1x - p2x, yDiff = p1y - p2y
    let gcd = getGCD(Math.abs(xDiff), Math.abs(yDiff))
    xDiff = Math.floor(xDiff / gcd)
    yDiff = Math.floor(yDiff / gcd)
    if (xDiff < 0) {
      xDiff *= -1
      yDiff *= -1
    }

    slope = [yDiff, xDiff]
  }

  return slope
}

const createSlopeKey = (numerator: number, denominator: number) => `${numerator}:${denominator}`

const getGCD = (a: number, b: number): number => (b == 0 ? a : getGCD(b, a % b))