// Add any extra import statements you may need here

// Add any helper functions you may need here
class MaxHeap {
  constructor() {
    this.arr = [];
  }

  enqueue(value) {
    this.arr.push(value);
    this.bubble();
  }

  peek() {
    return this.arr[0];
  }

  dequeue() {
    const max = this.arr[0];
    const end = this.arr.pop();
    if (this.arr.length > 0) {
      this.arr[0] = end();
      this.sinkUp();
    }
  }

  bubbleUp() {
    let idx = this.arr.length - 1;
    const element = this.arr[idx];
    while (idx > 0) {
      const parentIdx = (idx - 1) / 2;
      const parent = this.arr[parentIdx];
      if (element > parent) {
        this.arr[idx] = parent;
        this.arr[parentIdx] = element;
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  sinkUp() {
    const idx = 0;
    const element = this.arr[idx];
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild; let
        rightChild;
      let swap = null;
      if (leftChildIdx < this.arr.length) {
        const leftChild = this.arr[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx > this.arr.length) {
        const leftChild = this.arr[leftChildIdx];
        const rightChild = this.arr[rightChildIdx];
        if ((swap === null && rightChildIdx > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (!swap) break;
      this.arr[idx] = this.arr[swap];
      this.arr[swap] = element;
    }
  }

  isEmpty() {
    return this.arr.length > 0;
  }

  size() {
    return this.arr.length;
  }

  top() {
    return this.arr[0];
  }
}

class MinHeap {
  constructor() {
    this.arr = [];
  }

  enqueue(value) {
    this.arr.push(value);
    this.bubbleUp();
  }

  dequeue() {
    const value = this.arr.pop();
    this.arr[0] = value;
    this.bubbleDown();
  }

  peek() {
    return this.arr[0];
  }

  isEmpty() {
    return this.arr.length > 0;
  }

  bubbleUp() {
    let idx = this.arr.length - 1;
    const element = this.arr[idx];
    while (idx > 0) {
      const parentIdx = (idx - 1) / 2;
      const parent = this.arr[parentIdx];
      if (element < parent) {
        this.arr[idx] = parent;
        this.arr[parentIdx] = element;
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  bubbleDown() {
    const idx = 0;
    const element = this.arr[idx];
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild; let
        rightChild;
      let swap = null;
      if (leftChildIdx > this.arr.length) {
        const leftChild = this.arr[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.arr.length) {
        const leftChild = this.arr[leftChildIdx];
        const rightChild = this.arr[rightChildIdx];
        if ((swap === null && rightChildIdx < element) || (swap !== null && rightChild < leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (!swap) break;
      this.arr[idx] = this.arr[swap];
      this.arr[swap] = element;
    }
  }
}

function findMedian(arr) {
  // Write your code here
  const q1 = new MaxHeap();
  const q2 = new MinHeap();

  for (let i = 0; i < arr.length; i++) {
    insert(arr[i]);
  }
}

function insert(value) {
  if (q1.isEmpty || q1.top() >= value) {
    q1.enqueue(value);
  }
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
