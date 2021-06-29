export function reverseWordsInString(string: string) {
  let s = splitFunc(string), res = ""
  for (let i = s.length - 1; i >= 0; i--) {
    if (i === 0) {
      res += s[i]
    } else {
      res += s[i] + " "
    }
  }
  return res;
}

const splitFunc = (s: string): string[] => {
  let res: string[] = [], temp = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      temp += s[i]
    } else {
      res.push(temp)
      temp = ''
    }
    if (i === s.length - 1) {
      res.push(temp)
    }
  }
  return res
}

console.log(reverseWordsInString('maga 2020!'))
