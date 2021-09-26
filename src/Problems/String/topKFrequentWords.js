/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

class Node {
  constructor(val, frequency) {
    this.val = val;
    this.frequency = frequency;
  }
}

class PriorityQueue {
  constructor() {
    this.arr = []
  }

  enqueue(val, frequency) {
    const newNode = new Node(val, frequency);
    this.arr.push(newNode);
    this.sinkUp();
  }
  dequeue() {
    const max = this.arr[0];
    const end = this.arr.pop();
    if (this.arr.length > 0) {
      this.arr[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkUp() {
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
        if (leftChild.frequency >= element.frequency) {
          if(leftChild.frequency === element.frequency) {
            console.log(leftChild.val > element.val)
            console.log(leftChild.val, element.val)
            if(leftChild.val > element.val) {
            } else {
              swap = leftChildIdx;

            }
          }
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

var topKFrequent = function(words, k) {
    let frequency = new Map();
    for(let word of words) {
      frequency.has(word) ? frequency.set(word, frequency.get(word) + 1) : frequency.set(word, 1)
    }
    const pq = new PriorityQueue();
    frequency.forEach((val, key, idx) => pq.enqueue(key, val))
    let output = []
    for(let i = 0; i < k; i++) {
      output[i] = pq.dequeue().val;
    }
    return output;
};


// const output = topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3)
const output = topKFrequent(["aaa","aa","a"], 1)
// "a"

console.log(output)
