const runLengthEncoding = (string: string): string => {
  const encoded = []
  let currLength = 1

  for (let i = 1; i < string.length; i++) {
    const currChar = string[i]
    const prevChar = string[i - 1]

    if (currChar !== prevChar || currLength === 9) {
      encoded.push(currLength.toString())
      encoded.push(prevChar)
      currLength = 0
    }
    currLength++
  }

  encoded.push(currLength.toString())
  encoded.push(string[string.length - 1])

  return encoded.join("")
}