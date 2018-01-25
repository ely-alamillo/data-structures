class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const node = { value, next: null };
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.tail = node;
  }

  removeHead() {
    const current = this.head;
    if (current.value) {
      this.head = this.head.next;
    }
    return current.value;
  }

  contains(value) {
    let current = this.head;
    while (current.next) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }
}

const list = new linkedList();
list.addToTail(10);
list.addToTail(20);
list.addToTail(30);
list.addToTail(40);
console.log(JSON.stringify(list));
list.removeHead();
console.log(JSON.stringify(list));
console.log(list.contains(20));
console.log(list.contains(10));

module.exports = linkedList;
