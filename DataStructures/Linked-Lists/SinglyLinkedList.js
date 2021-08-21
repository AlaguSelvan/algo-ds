class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
		}
		this.tail = newNode;
		this.length++;
		return newNode;
	}
	pop() {
		if (!this.length) return null;
		let current = this.head;
		let tail = current;
		while (current.next) {
			tail = current;
			current = current.next;
		}
		tail.next = null;
		this.tail = tail;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
console.log(list);

// [{val: 1, next: {val: 2, next: null}}, {val: 2, next: null}]
//
