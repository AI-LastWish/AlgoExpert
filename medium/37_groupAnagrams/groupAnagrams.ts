export function groupAnagrams(words: string[]) {
  const anarams: { [key: string]: string[] } = {}
  for (const word of words) {
    const sortedWord = word.split('').sort().join('')
    if (sortedWord in anarams) {
      anarams[sortedWord].push(word)
    } else {
      anarams[sortedWord] = [word]
    }
  }
  return Object.values(anarams)
}
