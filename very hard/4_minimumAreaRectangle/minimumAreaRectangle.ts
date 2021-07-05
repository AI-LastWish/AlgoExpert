export function minimumAreaRectangle(points: number[][]) {
  const pointSet = createPointSet(points)
  let minAreaFound = Infinity

  for (let currIdx = 0; currIdx < points.length - 1; currIdx++) {
    const [p1x, p1y] = points[currIdx]
    for (let nextIdx = currIdx + 1; nextIdx < points.length; nextIdx++) {
      const [p2x, p2y] = points[nextIdx]

      if (p1x === p2x || p1y === p2y) continue // if p1 and p2 are in same axis, skip

      const oppositeDiagonalExists = pointSet.has(pointToString(p1x, p2y)) && pointSet.has(pointToString(p2x, p1y))

      if (oppositeDiagonalExists) {
        const currArea = Math.abs(p1x - p2x) * Math.abs(p1y - p2y)
        minAreaFound = Math.min(minAreaFound, currArea)
      }
    }
  }
  return minAreaFound !== Infinity ? minAreaFound : 0
}

const createPointSet = (points: number[][]) => {
  const pointSet: Set<string> = new Set()

  for (const point of points) {
    const [x, y] = point
    const pString = pointToString(x, y)
    pointSet.add(pString)
  }

  return pointSet
}

const pointToString = (x: number, y: number) => `${x}:${y}`
