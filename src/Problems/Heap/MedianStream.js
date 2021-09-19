// Add any extra import statements you may need here

class MaxHeap {
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
      if (element <= parent) break;
      this.arr[idx] = parent;
      this.arr[parentIdx] = element;
      idx = parentIdx;
    }
  }

  // Method: heap.insert
  push(val) {
    this.arr.push(val);
    this.bubble();
  }

  // Method: heap.extract
  pop() {
    const max = this.arr[0];
    const end = this.arr.pop();
    if (this.arr.length > 0) {
      this.arr[0] = end;
      this.sinkDown();
    }
    return max;
  }

  size() {
    return this.arr.length;
  }

  peek() {
    return this.arr[0];
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < this.arr.length) {
        rightChild = this.arr[rightChildIdx];
        if (
          (swap === null && rightChild > element)
					|| (swap !== null && rightChild > leftChild)
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

class MinHeap {
  constructor() {
    this.arr = [];
  }

  push(element) {
    this.arr.push(element);
    this.bubbleUp();
  }

  size() {
    return this.arr.length;
  }

  peek() {
    return this.arr[0];
  }

  bubbleUp() {
    let idx = this.arr.length - 1;
    const element = this.arr[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.arr[parentIdx];
      if (parent >= element) {
        this.arr[idx] = parent;
        this.arr[parentIdx] = element;
        idx = parentIdx;
      }
    }
  }

  pop() {
    const min = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    this.bubbleDown();
    return min;
  }

  bubbleDown() {
    const idx = 0;
    const element = this.arr[0];
    while (true) {
      const leftChildIdx = idx * 2 + 1;
      const rightChildIdx = idx * 2 + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftChildIdx < this.arr.length) {
        leftChild = this.arr[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChild < this.arr.length) {
        if (
          (swap === null && rightChild < element) || (swap !== null && rightChild < firstChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.arr[idx] = this.arr[swap];
      this.arr[swap] = element;
    }
  }
}

function addNumber(item, lowers, highers) {
  if (lowers.size() === 0 || item < lowers.peek()) {
    lowers.push(item);
  } else {
    highers.push(item);
  }
};

function rebalance(lowers, highers) {
  let biggerHeap = lowers.size() > highers.size() ? lowers : highers;
  let smallerHeap = lowers.size() < highers.size() ? lowers : highers;
  const diff = biggerHeap.size() - smallerHeap.size()
  let res = []
  if (diff >= 2) {
    res.push(biggerHeap.pop())
  }
  if(res.length > 0) {
    smallerHeap.push(res[0])
  }
};

function getMedian(lowers, highers) {
  const biggerHeap = lowers.size() > highers.size() ? lowers : highers;
  const smallerHeap = lowers.size() > highers.size() ? highers : lowers;
  if (biggerHeap.size() === smallerHeap.size()) {
    return (biggerHeap.peek() + smallerHeap.peek()) / 2;
  }
  return biggerHeap.peek();
};

function findMedian(arr) {
  // Write your code here
  const highers = new MaxHeap();
  const lowers = new MinHeap();
  const medians = [];

  for (const idx in arr) {
    const item = arr[idx];
    addNumber(item, lowers, highers);
    rebalance(lowers, highers);
    medians[idx] = getMedian(highers, lowers);
  }

  return medians;
}












// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printintegerArray(array) {
  const size = array.length;
  let res = '';
  res += '[';
  let i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

let test_case_number = 1;

function check(expected, output) {
  const expected_size = expected.length;
  const output_size = output.length;
  let result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (let i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  const rightTick = '\u2713';
  const wrongTick = '\u2717';
  if (result) {
    var out = `${rightTick} Test #${test_case_number}`;
    console.log(out);
  } else {
    var out = '';
    out += `${wrongTick} Test #${test_case_number}: Expected `;
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

const arr_1 = [5, 15, 1, 3];
const expected_1 = [5, 10, 5, 4];
const output_1 = findMedian(arr_1);
check(expected_1, output_1);

const arr_2 = [2, 4, 7, 1, 5, 3];
const expected_2 = [2, 3, 4, 3, 4, 3];
const output_2 = findMedian(arr_2);
check(expected_2, output_2);

// Add your own test cases here
