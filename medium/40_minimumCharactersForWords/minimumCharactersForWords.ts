export function minimumCharactersForWords(words: string[]) {
  if (words.length === 0) return words
  let res = words[0].split('')
  for (const word of words) {
    let temp = res.slice()
    for (const char of word) {
      if (temp.includes(char)) {
        temp.splice(temp.indexOf(char), 1)
      } else {
        res.push(char)
      }
    }
  }
  return res;
}