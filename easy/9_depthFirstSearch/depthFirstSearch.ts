export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array: string[]): string[] {
    array.push(this.name)
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].depthFirstSearch(array)
    }
    return array;
  }
}