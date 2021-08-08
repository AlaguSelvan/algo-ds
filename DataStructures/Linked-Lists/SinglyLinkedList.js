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
	push(val) {
		const newNode = new Node(val)
		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {

			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length += 1;
	}
	pop() {
		let current = this.head;
		let newTail = current;
		if(!current) return;
		while(current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current
	}
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.pop()
list.pop()
console.log(list)