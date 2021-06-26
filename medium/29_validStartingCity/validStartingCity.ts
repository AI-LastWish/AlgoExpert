export function validStartingCity(distances: number[], fuel: number[], mpg: number) {
  let milesRemain = 0, startCityIdx = 0, milesRemainAtStartCity = 0

  for (let i = 1; i < distances.length; i++) {
    milesRemain += mpg * fuel[i - 1] - distances[i - 1]
    if (milesRemain < milesRemainAtStartCity) {
      milesRemainAtStartCity = milesRemain
      startCityIdx = i
    }
  }

  return startCityIdx
}
