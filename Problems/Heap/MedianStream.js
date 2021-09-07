// Add any extra import statements you may need here


// Add any helper functions you may need here
class MaxHeap {
  constructor() {
    this.arr = []
  }
  enqueue(value) {
    this.arr.push(value)
    this.bubble()
  }
  peek() {
    return this.arr[0]
  }
  
  dequeue() {
    let max = this.arr[0];
    let end = this.arr.pop();
    if(this.arr.length > 0) {
      this.arr[0] = end();
      this.sinkUp()
    }    
  }
  
  bubbleUp() {
    let idx = this.arr.length - 1;
    let element = this.arr[idx];
    while(idx > 0) {
      let parentIdx = (idx - 1) / 2;
      let parent = this.arr[parentIdx];
      if(element > parent) {
        this.arr[idx] = parent;
        this.arr[parentIdx] = element
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  
  sinkUp() {
    let idx = 0;
    let element = this.arr[idx];
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if(leftChildIdx < this.arr.length) {
        let leftChild = this.arr[leftChildIdx];
        if(leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx > this.arr.length) {
        let leftChild = this.arr[leftChildIdx];
        let rightChild = this.arr[rightChildIdx];
        if((swap === null && rightChildIdx > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }
      if(!swap) break;
      this.arr[idx] = this.arr[swap];
      this.arr[swap] = element;
    }
  }
 
  isEmpty() {
    return this.arr.length > 0
  }
  size() {
    return this.arr.length;
  }
  top() {
    return this.arr[0]
  }
}

class MinHeap {
  constructor() {
    this.arr = []
  }
  enqueue(value) {
    this.arr.push(value)
    this.bubbleUp()
  }
  
  dequeue() {
    let value = this.arr.pop()
    this.arr[0] = value;
    this.bubbleDown();
  }
  
  peek() {
    return this.arr[0]
  }
  isEmpty() {
    return this.arr.length > 0
  }
  
  bubbleUp() {
    let idx = this.arr.length - 1;
    let element = this.arr[idx];
    while(idx > 0) {
      let parentIdx = (idx - 1) / 2;
      let parent = this.arr[parentIdx];
      if(element < parent) {
        this.arr[idx] = parent;
        this.arr[parentIdx] = element
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  
  bubbleDown() {
    let idx = 0;
    let element = this.arr[idx];
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if(leftChildIdx > this.arr.length) {
        let leftChild = this.arr[leftChildIdx];
        if(leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < this.arr.length) {
        let leftChild = this.arr[leftChildIdx];
        let rightChild = this.arr[rightChildIdx];
        if((swap === null && rightChildIdx < element) || (swap !== null && rightChild < leftChild)) {
          swap = rightChildIdx;
        }
      }
      if(!swap) break;
      this.arr[idx] = this.arr[swap];
      this.arr[swap] = element;
    }
  }
}



function findMedian(arr) {
  // Write your code here
	let q1 = new MaxHeap();
	let q2 = new MinHeap();
	function insert(num) {

	if(q1.isEmpty() || num <= q2.peek())
		q1.add(num);
	else
		q2.add(num);

	if(q1.size() > q2.size() + 1)
		q2.add(q1.poll());
	else if(maxHeap.size() < minHeap.size())
		maxHeap.add(minHeap.poll());

	if(minHeap.size() == maxHeap.size())
		median = (minHeap.peek() + maxHeap.peek()) / 2.0;
	else if(minHeap.size() < maxHeap.size())
		median = maxHeap.peek();
	else
		median = minHeap.peek();

	return arr;
}


	function getMedian() {
		return median;
	}
    let output = [arr.length];
    for(let i = 0 ; i < arr.length; i++) {
      insert(arr[i]);
      if(i == 0) {
        output[i] = arr[0];
        continue;
      }
      
      output[i] = getMedian();
    }
    return output;
  


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
