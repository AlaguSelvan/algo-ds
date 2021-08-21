export class MinHeap {
	constructor(arr) {
		this.arr = [...arr];
	}

	insert(element) {
		this.arr.push(element);
		this.bubbleUp();
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

	removeMin() {
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
const arr = [41, 39, 33, 18, 27, 12, 55];

const minHeap = new MinHeap(arr);
console.log(minHeap.arr);
minHeap.insert(10);
minHeap.removeMin();
console.log(minHeap.arr);
