export function validIPAddresses(s: string) {
  let res: string[] = []

  const backtrack = (s: string, start: number, count: number, curr: string): void => {
    if (start >= s.length && count === 4) {
      res.push(curr)
      return
    } else if (count >= 4)
      return
    for (let i = start; i < s.length; i++) {
      let ip = s.slice(start, i + 1)
      if (!isValidIP(ip))
        return
      if (+ip >= 0 && +ip <= 255) {
        if (count < 3)
          backtrack(s, i + 1, count + 1, curr + ip + ".")
        else
          backtrack(s, i + 1, count + 1, curr + ip)
      }
    }
  }

  if (s.length === 0) return res
  backtrack(s, 0, 0, "")
  return res
}

const isValidIP = (ip: string): boolean => {
  return (ip.length > 1 && ip[0] === '0') || +ip > 255 ? false : true
}

