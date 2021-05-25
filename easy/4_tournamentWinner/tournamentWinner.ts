// Time: O(n), Space: O(k)
const HOME_TEAM_WON = 1

const tournamentWinner = (competitions: string[][], results: number[]): string => {
  let currentBestTeam = ""
  let scores = { [currentBestTeam]: 0 }

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i]
    const [homeTeam, awayTeam] = competitions[i]

    let winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam

    updateScores(winningTeam, 3, scores)

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam
    }
  }

  return currentBestTeam
}

const updateScores = (team: string, point: number, scores: { [team: string]: number }): void => {
  if (!(team in scores)) scores[team] = 0
  scores[team] += point
}

console.log(tournamentWinner([
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
], [0, 0, 1]))