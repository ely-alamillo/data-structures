class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BST {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else if (value <= this.root.value) {
      if (!this.root.left) this.root.left = node;
      else this.root.left.insert(value);
    } else if (value > this.root.value) {
      if (!this.root.right) this.root.right = node;
      else this.root.right.insert(value);
    }
  }

  contains(value) {
    console.log(this);

    if (this.root.value === value) return true;
    if (value < this.root.value) {
      if (!this.root.left) return false;
      else return this.root.left.contains(value);
    } else if (this.root.value > this.root.value) {
      if (!this.root.right) return false;
      else return this.root.right.contains(value);
    }
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(11);
bst.insert(9);
bst.insert(8);
// console.log(bst);
// console.log(bst.contains(10));
// console.log(bst.contains(1));
