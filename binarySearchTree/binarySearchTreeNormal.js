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
}

const bst = new BST();
bst.insert(50);
bst.insert(40);
bst.insert(100);
bst.insert(120);
bst.insert(30);
// console.log(bst);

console.log(bst.contains(0));
console.log(bst.contains(100));
console.log(bst.contains(30));
