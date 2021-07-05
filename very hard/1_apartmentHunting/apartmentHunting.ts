interface Block {
  [key: string]: boolean;
}

export function apartmentHunting(blocks: Block[], reqs: string[]) {
  const minDistFromBlocks = reqs.map(req => getMinDist(blocks, req))
  const maxDistAtBlocks = getMaxDistAtBlocks(blocks.length, minDistFromBlocks)

  return maxDistAtBlocks.indexOf(Math.min(...maxDistAtBlocks))
}

const getMinDist = (blocks: Block[], req: string): number[] => {
  const minDist: number[] = new Array(blocks.length)
  let closestReqIdx = Infinity
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) closestReqIdx = i
    minDist[i] = Math.abs(i - closestReqIdx)
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) closestReqIdx = i
    minDist[i] = Math.min(minDist[i], Math.abs(i - closestReqIdx))
  }
  return minDist
}

const getMaxDistAtBlocks = (length: number, minDistFromBlocks: number[][]) => {
  const maxDistAtBlocks: number[] = new Array(length)
  for (let i = 0; i < length; i++) {
    const minDistAtBlock = minDistFromBlocks.map(dist => dist[i])
    maxDistAtBlocks[i] = Math.max(...minDistAtBlock)
  }
  return maxDistAtBlocks
}

console.log(apartmentHunting([
  {
    "gym": false,
    "school": true,
    "store": false
  },
  {
    "gym": true,
    "school": false,
    "store": false
  },
  {
    "gym": true,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "school": true,
    "store": true
  }
], ["gym", "school", "store"]))