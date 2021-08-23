export function generateDivTags(numberOfTags: number) {
  const res: string[] = []
  generateDivFromPrefix(numberOfTags, numberOfTags, '', res)
  return res
}

const generateDivFromPrefix = (numOfOpenTags: number, numOfCloseTags: number, prefix: string, res: string[]) => {
  if (numOfOpenTags > 0) {
    generateDivFromPrefix(numOfOpenTags - 1, numOfCloseTags, prefix + '<div>', res)
  }
  if (numOfOpenTags < numOfCloseTags) {
    generateDivFromPrefix(numOfOpenTags, numOfCloseTags - 1, prefix + '</div>', res)
  }
  if (numOfCloseTags === 0) res.push(prefix)
}
