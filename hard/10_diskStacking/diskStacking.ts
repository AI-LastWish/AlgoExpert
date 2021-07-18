type Disk = [number, number, number];

export function diskStacking(disks: Disk[]) {
  disks.sort((a, b) => a[2] - b[2])
  const heights = disks.map(disk => disk[2])
  const sequences = new Array(disks.length)
  let maxHeightIdx = 0
  for (let i = 1; i < disks.length; i++) {
    const currDisk = disks[i]
    for (let j = 0; j < i; j++) {
      const prevDisk = disks[j]
      if (areValidDimentions(prevDisk, currDisk)) {
        if (heights[i] <= currDisk[2] + heights[j]) {
          heights[i] = currDisk[2] + heights[j]
          sequences[i] = j
        }
      }
    }
    if (heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i
  }
  return buildSequence(disks, sequences, maxHeightIdx)
}

const areValidDimentions = (prevDisk: Disk, currDisk: Disk) => {
  return prevDisk[0] < currDisk[0] && prevDisk[1] < currDisk[1] && prevDisk[2] < currDisk[2]
}

const buildSequence = (disks: Disk[], sequences: number[], maxHeightIdx: number) => {
  const sequence: Disk[] = []
  while (maxHeightIdx !== undefined) {
    sequence.unshift(disks[maxHeightIdx])
    maxHeightIdx = sequences[maxHeightIdx]
  }
  return sequence
}
