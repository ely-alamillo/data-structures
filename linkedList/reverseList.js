const reverseList = list => {
  if (!list || !list.next) return head;
  let current = list;
  let prev = null;

  while (current) {
    let tmp = current.next;
    current.next = prev;

    prev = current;
    current = tmp;
  }
  return prev;
};

const reverseRecursive = list => {
  if (!list.next) return list;
  else newStart = reverseRecursive(list.next);

  list.next.next = list;
  list.next = null;
  return newStart;
};

const list = {
  value: 1,
  next: { value: 2, next: { value: 3, next: { value: 4, next: null } } }
};

console.log(JSON.stringify(list));
// console.log(JSON.stringify(reverseList(list)));
console.log(JSON.stringify(reverseRecursive(list)));
