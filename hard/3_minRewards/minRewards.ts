export function minRewards(scores: number[]) {
  const res = scores.map(_ => 1)
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      res[i] = res[i - 1] + 1
    }
  }
  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1]) {
      res[i] = Math.max(res[i], res[i + 1] + 1)
    }
  }
  return res.reduce((a, b) => a + b);
}
