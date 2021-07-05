export function calendarMatching(
  calendar1: string[][],
  dailyBounds1: [string, string],
  calendar2: string[][],
  dailyBounds2: [string, string],
  meetingDuration: number,
) {
  const updatedCal1 = updateCal(calendar1, dailyBounds1)
  const updatedCal2 = updateCal(calendar2, dailyBounds2)
  const mergedCal = mergeCals(updatedCal1, updatedCal2)
  const flattenedCal = flattenCal(mergedCal)

  return getMatchingAvailabilities(flattenedCal, meetingDuration)
}

const updateCal = (calendar: string[][], dailyBounds: [string, string]) => {
  const updatedCal = [['0:00', dailyBounds[0]], ...calendar, [dailyBounds[1], '23:59']]
  return updatedCal.map(meeting => meeting.map(timeToMinutes))
}

const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(str => +str)
  return hours * 60 + minutes
}

const mergeCals = (updatedCal1: number[][], updatedCal2: number[][]) => {
  const merged: number[][] = []
  let i = 0, j = 0
  while (i < updatedCal1.length && j < updatedCal2.length) {
    if (updatedCal1[i][0] < updatedCal2[j][0]) {
      merged.push(updatedCal1[i])
      i++
    } else {
      merged.push(updatedCal2[j])
      j++
    }
  }
  while (i < updatedCal1.length) merged.push(updatedCal1[i++])
  while (j < updatedCal2.length) merged.push(updatedCal2[j++])
  return merged
}

const flattenCal = (mergedCal: number[][]) => {
  const flattened: number[][] = [mergedCal[0].slice()]

  for (let i = 1; i < mergedCal.length; i++) {
    const [currStart, currEnd] = mergedCal[i]
    const [prevStart, prevEnd] = flattened[flattened.length - 1]
    if (prevEnd >= currStart) {
      flattened[flattened.length - 1] = [prevStart, Math.max(prevEnd, currEnd)]
    } else {
      flattened.push([currStart, currEnd].slice())
    }
  }

  console.log(flattened)
  return flattened
}

const getMatchingAvailabilities = (flattenedCal: number[][], meetingDuration: number) => {
  const matchingAvailabilities: number[][] = []

  for (let i = 1; i < flattenedCal.length; i++) {
    const start = flattenedCal[i - 1][1], end = flattenedCal[i][0]
    const availabilityDuration = end - start
    if (availabilityDuration >= meetingDuration) {
      matchingAvailabilities.push([start, end])
    }
  }
  return matchingAvailabilities.map(leisure => leisure.map(minutesToTime))
}

const minutesToTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60).toString()
  const mins = minutes % 60 < 10 ? '0' + (minutes % 60).toString() : (minutes % 60).toString()
  return `${hours}:${mins}`
}

console.log(calendarMatching([
  ["9:00", "10:30"],
  ["12:00", "13:00"],
  ["16:00", "18:00"]
], ["9:00", "20:00"], [
  ["10:00", "11:30"],
  ["12:30", "14:30"],
  ["14:30", "15:00"],
  ["16:00", "17:00"]
], ["10:00", "18:30"], 30))
