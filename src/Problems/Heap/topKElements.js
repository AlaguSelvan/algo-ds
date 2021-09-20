/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


class Node {
  constructor(idx, frequency) {
    this.idx = idx;
    this.frequency = frequency;
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
      if (element.frequency <= parent.frequency) break;
      this.arr[idx] = parent;
      this.arr[parentIdx] = element;
      idx = parentIdx;
    }
  }

  // Method: heap.insert
  enqueue(idx, frequency) {
    const newNode = new Node(idx, frequency);
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
        if (leftChild.frequency > element.frequency) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < this.arr.length) {
        rightChild = this.arr[rightChildIdx];
        if (
          (swap === null && rightChild.frequency > element.frequency)
					|| (swap !== null && rightChild.frequency > leftChild.frequency)
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


var topKFrequent = function(nums, k) {
  let freqMap = new Map();
  nums.map((num, n) => freqMap.has(num) ? freqMap.set(num, freqMap.get(num) + 1) : freqMap.set(num, 1));
  const pq = new PriorityQueue();
  for(let [key, idx] of freqMap) {
    pq.enqueue(key, idx)
  }
  let ar = [];
  while(k--) {
    const v = pq.dequeue().idx;
    ar.push(v)
  }
  return ar;
};


const op = topKFrequent([5,3,1,1,1,3,73,1], 2);
console.log(op)
