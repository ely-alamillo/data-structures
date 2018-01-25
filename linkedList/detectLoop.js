class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const findLoop = list => {
  let slow = list;
  let fast = list;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
};

const nodeA = new Node('A');
const nodeB = (nodeA.next = new Node('B'));
const nodeC = (nodeB.next = new Node('C'));
const nodeD = (nodeC.next = new Node('D'));
const nodeE = (nodeD.next = new Node('E'));
nodeE.next = nodeB;

// console.log(JSON.stringify(nodeA)); // -> gives error because it is circular
console.log(findLoop(nodeA)); // -> true
nodeE.next = null;
console.log(findLoop(nodeA)); // -> false
