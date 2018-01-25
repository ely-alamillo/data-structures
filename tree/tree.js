class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = [];
  }
}

class Tree {
  constructor(value) {
    const node = new Node(value);
    this.root = node;
  }
}
