const LETTERS: { [digit: number]: string[] } = {
  0: ['0'],
  1: ['1'],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

const phoneNumberMnemonics = (phoneNumber: string): string[] => {
  let res: string[] = []
  if (phoneNumber) backtrack(0, "", phoneNumber, res)
  return res
}

const backtrack = (i: number, curStr: string, phoneNumber: string, res: string[]): void => {
  if (curStr.length === phoneNumber.length) {
    res.push(curStr)
    return
  }
  for (const c of LETTERS[phoneNumber[i]])
    backtrack(i + 1, curStr + c, phoneNumber, res)
}

console.log(phoneNumberMnemonics("1905"))