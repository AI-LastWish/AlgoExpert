export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

const removeDuplicatesFromLinkedList = (linkedList: LinkedList): LinkedList => {
  let curr = linkedList
  while (curr) {
    let next = curr.next
    while (next && curr.value === next.value) {
      next = next.next
    }
    // remove all duplicate Node
    curr.next = next
    // point to next Node
    curr = next
  }

  return linkedList
}