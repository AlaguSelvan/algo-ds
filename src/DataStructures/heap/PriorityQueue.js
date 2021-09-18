class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // this.insertTime = Date.now();
  }
}

class PriorityQueue {
  constructor() {
    this.arr = [];
  }

  // Method: heap.bubble
  bubble() {
    let idx = this.arr.length - 1;
    const element = this.arr[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.arr[parentIdx];
      if (element.priority <= parent.priority) break;
      this.arr[idx] = parent;
      this.arr[parentIdx] = element;
      idx = parentIdx;
    }
  }

  // Method: heap.insert
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.arr.push(newNode);
    this.bubble();
  }

  // Method: heap.extract
  dequeue() {
    const max = this.arr[0];
    const end = this.arr.pop();
    if (this.arr.length > 0) {
      this.arr[0] = end;
      this.sinkDown();
    }
    return max;
  }

  // Method: heap.sinkDown
  sinkDown() {
    let idx = 0;
    const element = this.arr[0];
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let swap = null;
      let leftChild; let
        rightChild;
      if (leftChildIdx < this.arr.length) {
        leftChild = this.arr[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < this.arr.length) {
        rightChild = this.arr[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority)
					|| (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.arr[idx] = this.arr[swap];
      this.arr[swap] = element;
      idx = swap;
    }
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue('coding', 99);
priorityQueue.enqueue('food', 70);
priorityQueue.enqueue('gym', 50);
priorityQueue.enqueue('studies', 10);
priorityQueue.enqueue('gaming', 4);
priorityQueue.enqueue('sleep', 11);

priorityQueue.dequeue();

console.log(priorityQueue);
