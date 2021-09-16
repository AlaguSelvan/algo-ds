// Add any extra import statements you may need here

class MaxHeap {
	constructor() {
		this.arr = [];
	}

	// Method: heap.bubble
	bubble() {
		let idx = this.arr.length - 1;
		let element = this.arr[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.arr[parentIdx];
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
		let max = this.arr[0];
		let end = this.arr.pop();
		if (this.arr.length > 0) {
			this.arr[0] = end;
			this.sinkDown();
		}
		return max;
	}

	size() {
		return this.arr.length
	}

	peek() {
		return this.arr[0]
	}

	// Method: heap.sinkDown
	sinkDown() {
		let idx = 0;
		let element = this.arr[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let swap = null;
			let leftChild, rightChild;
			if (leftChildIdx < this.arr.length) {
				leftChild = this.arr[leftChildIdx];
				if (leftChild > element) {
					swap = leftChildIdx;
				}
			}

			if (rightChildIdx < this.arr.length) {
				rightChild = this.arr[rightChildIdx];
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
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
		return this.arr.length
	}

	peek() {
		return this.arr[0]
	}

	bubbleUp() {
		let idx = this.arr.length - 1;
		let element = this.arr[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.arr[parentIdx];
			if (parent >= element) {
				this.arr[idx] = parent;
				this.arr[parentIdx] = element;
				idx = parentIdx;
			}
		}
	}

	pop() {
		let min = this.arr[0];
		this.arr[0] = this.arr[this.arr.length - 1];
		this.arr.pop();
		this.bubbleDown();
		return min;
	}

	bubbleDown() {
		let idx = 0;
		let element = this.arr[0];
		while (true) {
			let leftChildIdx = idx * 2 + 1;
			let rightChildIdx = idx * 2 + 2;
			let leftChild, rightChild;
			let swap = null;
			if (leftChildIdx < this.arr.length) {
				leftChild = this.arr[leftChildIdx];
				if (leftChild > element) {
					swap = leftChildIdx;
				}
			}

			if (rightChild < this.arr.length) {
				if (
					(swap === null && rightChild < element) ||
					(swap !== null && rightChild < firstChild)
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

const addNumber = (item, minHeap, maxHeap) => {
	if(maxHeap.size() === 0 || item < maxHeap.peek()) {
		maxHeap.push(item);
	} else {
		minHeap.push(item);
	}
}

const rebalance = (lowers, highers) => {
	let biggerHeap = lowers.size() > highers.size() ? lowers : highers;
	let smallerHeap = lowers.size() < highers.size() ? lowers : highers;
	const diff = biggerHeap.size() - smallerHeap.size()
	if(diff <= 1) return
	let temp = []
	if(diff >= 2) {
		const val = biggerHeap.pop()
		if(!val) return
		// temp.push(val)
		smallerHeap.push(val);
	} else {
		return
	}
	// temp.forEach(item => {
	// 	smallerHeap.push(item)
	// })
	console.log(temp)
}

const getMedian = (minHeap, maxHeap) => {
	let biggerHeap = maxHeap.size() > minHeap.size() ? maxHeap : minHeap;
	let smallerHeap= maxHeap.size() > minHeap.size() ? minHeap : maxHeap;
	if(biggerHeap.size() === smallerHeap.size()) {
		return (biggerHeap.peek() + smallerHeap.peek()) / 2;
	} else {
		return biggerHeap.peek();
	}
}



function findMedian(arr) {
  // Write your code here
	let maxHeap = new MaxHeap();
	let minHeap = new MinHeap();
	let medians = [];
	let idx = 0;

	for(let value of arr) {
		addNumber(value, maxHeap, minHeap);
		rebalance(maxHeap, minHeap);
		medians[idx] = getMedian(maxHeap, minHeap);
		idx++
	}

	return medians



}










// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [5, 15, 1, 3];
var expected_1 = [5, 10, 5, 4];
var output_1 = findMedian(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 4, 7, 1, 5, 3];
var expected_2 = [2, 3, 4, 3, 4, 3];
var output_2 = findMedian(arr_2);
check(expected_2, output_2);

// Add your own test cases here
