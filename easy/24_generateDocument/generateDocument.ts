const generateDocument = (characters: string, document: string): boolean => {
  let charCounts: { [char: string]: number } = {}

  for (let i = 0; i < characters.length; i++) {
    if (!(characters[i] in charCounts)) charCounts[characters[i]] = 0
		charCounts[characters[i]]++
  }

  for (let i = 0; i < document.length; i++) {
    if (!(document[i] in charCounts) || charCounts[document[i]] === 0) return false
    charCounts[document[i]]--
  }

  return true
}