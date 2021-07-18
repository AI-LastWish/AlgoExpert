export function longestCommonSubsequence(str1: string, str2: string) {
  let dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0))
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      dp[i][j] = str1[i - 1] === str2[j - 1] ? 1 + dp[i - 1][j - 1] : Math.max(dp[i - 1][j], dp[i][j - 1])

    }
  }
  return buildSequece(dp, str1)
}

const buildSequece = (dp: number[][], str1: string) => {
  const res: string[] = []
  let i = dp.length - 1, j = dp[0].length - 1
  while (i > 0 && j > 0) {
    if (dp[i][j] === dp[i - 1][j]) {
      i--
    } else if (dp[i][j] === dp[i][j - 1]) {
      j--
    } else {
      res.unshift(str1[i - 1])
      i--
      j--
    }
  }
  return res
}

console.log(longestCommonSubsequence("ZXVVYZW", "XKYKZPW"))
