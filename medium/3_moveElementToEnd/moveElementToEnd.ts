const moveElementToEnd = (array: number[], toMove: number): number[] => {
  let left = 0, right = array.length - 1
  while (left < right) {
    if (array[left] === toMove) {
      array.splice(left, 1)
      array.push(toMove)
      right--
    } else {
      left++
    }
  }
  return array
}