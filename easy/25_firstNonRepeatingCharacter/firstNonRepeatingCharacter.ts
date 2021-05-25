const firstNonRepeatingCharacter = (str: string): number => {
  let charCounts: { [char: string]: number } = {}

  for (let i = 0; i < str.length; i++) {
    if (!(str[i] in charCounts)) charCounts[str[i]] = 0
    charCounts[str[i]]++
  }

  for (let i = 0; i < str.length; i++) {
    if (charCounts[str[i]] === 1) return i
  }

  return -1
}