const caesarCipherEncryptor = (string: string, key: number): string => {
  key = key % 26
  let output = []
  for (let i = 0; i < string.length; i++) {
    let newChar = string.charCodeAt(i) + key

    newChar = 97 <= newChar && newChar <= 122 ? newChar : newChar < 97 ? newChar + 26 : newChar - 26

    output.push(String.fromCharCode(newChar))
  }
  return output.join('')
}