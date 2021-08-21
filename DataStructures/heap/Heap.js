class Heap {
	constructor(arr) {
		this.arr = arr;
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
	insert(element) {
		this.arr.push(element);
		this.bubble();
	}

	// Method: heap.extract
	extractMax() {
		let max = this.arr[0];
		let end = this.arr.pop();
		if (this.arr.length > 0) {
			this.arr[0] = end;
			this.sinkDown();
		}
		return max;
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

const arr = [41, 39, 33, 18, 27, 12, 55];

const Heap = new heap(arr);
Heap.insert(66);
Heap.insert(15);
console.log(Heap.arr);
Heap.extractMax();
console.log(Heap.arr);
Heap.extractMax();
console.log(Heap.arr);
