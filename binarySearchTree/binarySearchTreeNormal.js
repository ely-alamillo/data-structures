class BST {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
      return;
    }
    if (value <= this.value) {
      if (!this.left) this.left = new BST(value);
      else return this.left.insert(value);
    } else if (value > this.value) {
      if (!this.right) this.right = new BST(value);
      else return this.right.insert(value);
    }
  }

  contains(value) {
    let current = this;
    while (current) {
      if (value === current.value) return true;
      else if (value < current.value) {
        if (!current.left) return false;
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  DFS(cb) {
    const search = node => {
      if (node) {
        cb(node.value);
        search(node.left);
        search(node.right);
      }
    };
    search(this);
  }

  BFS(cb) {
    let queue = Object.values(this);
    cb(queue);
  }
}

const bst = new BST();
bst.insert(50);
bst.insert(40);
bst.insert(100);
bst.insert(120);
bst.insert(30);
// console.log(bst);
// bst.DFS(node => console.log(node));
bst.BFS(node => console.log(node));
