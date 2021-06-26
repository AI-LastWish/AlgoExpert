export function taskAssignment(k: number, tasks: number[]) {
  const pairedTasks: [number, number][] = []
  const sortedTasks = [...tasks].sort((a, b) => a - b)
  const tasksDurationToIdx = getTaskDurationToIdx(tasks)

  let left = 0, right = sortedTasks.length - 1, first = 0, second = 0

  while (left < right) {
    first = tasksDurationToIdx[sortedTasks[left]].pop()!
    second = tasksDurationToIdx[sortedTasks[right]].pop()!
    left++
    right--
    pairedTasks.push([first, second])
  }

  return pairedTasks
}

const getTaskDurationToIdx = (tasks: number[]) => {
  const taskDurationToIdx: { [tasks: number]: number[] } = {}

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] in taskDurationToIdx) {
      taskDurationToIdx[tasks[i]].push(i)
    } else {
      taskDurationToIdx[tasks[i]] = [i]
    }
  }

  return taskDurationToIdx
}

console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]))
