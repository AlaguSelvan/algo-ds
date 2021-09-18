class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  setHead(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return null;
    let temp = null;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      temp = this.tail;
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  shift() {
    if (!this.head) return null;
    let temp = null;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      temp = this.head;
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return node;
  }

  get(idx) {
    if (idx >= this.length || idx < 0) return null;
    if (idx === 0) return this.head;
    if (idx === this.length - 1) return this.tail;
    let counter = 0;
    let current = this.head;
    while (counter <= this.length) {
      if (counter === idx) {
        return current;
      }
      current = current.next;
      counter++;
    }
  }

  set(idx, value) {
    if (idx >= this.length || idx < 0) return null;
    const foundNode = this.get(idx);
    if (!foundNode) return false;
    console.log(foundNode);
    foundNode.value = value;
    return true;
  }

  remove(idx) {
    if (idx >= this.length || idx < 0) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const removedNode = this.get(idx);
    if (!removedNode) return false;
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);

// // const pop = list.pop()
// // console.log(pop)
// // const shift = list.shift()
// // console.log(shift)
// const newVal = list.get(2)
// const newVal1 = list.set(2, 33)
// list.unshift(0)
// console.log(list.head)
// console.log(list)
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.remove(2);
console.log(list);
