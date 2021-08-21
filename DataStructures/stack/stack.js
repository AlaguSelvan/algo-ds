class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}
	dequeue() {
		let temp = this.first;
		if (!this.first) return null;
		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
		}
		--this.size;
		return temp.value;
	}
}

// FIFO
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);

console.log(queue.first);
