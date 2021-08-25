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
			this.tail = null;
		}
		return current;
	}
	shift() {
		if(!this.head) return;
		const tempHead = this.head;
		this.head = tempHead.next;
		this.length--;
		if(!this.length) {
			this.tail = null;
		}
		return tempHead
	}
	unshift(value) {
		if(!value) return;
		const newNode = new Node(value)
		if(!this.head) {
			this.head = this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(idx) {
		if(idx < 0 || idx >= this.length) return null;
		if(!this.head) return ;
		let current = this.head;
		let counter = 0;
		console.log(current)
		while(counter !== idx) {
			current = current.next;
			counter++;
		}
		return current;
	}
	set(idx, value) {
		let current = this.get(idx)
		if(current) {
			current.val = value
			return true;
		};
		return false;
	}
	remove(idx) {
		if(idx === this.length - 1) return this.pop();
		if(idx === 0) return this.shift();
		let current = this.get(idx)
		let previous = this.get(idx - 1)
		if(!current) return;
		previous.next = current.next;
		current = current.next;
		console.log(this)
		this.length--;
		return current;
	}
	reverse() {
		let current = this.head;
		this.head = this.tail;
		this.tail = current;
		let previous = null;
		let next = null;
		while(true) {
			next = current.next;
			current.next = previous
			previous = current;
			current = next
			if(!current) break;
		}
		return this;
	}
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(8);
list.push(9);
list.push(10);
console.log(list);
const first = list.get(0)
console.log('first', first);
list.set(0, 4)
list.set(1, 5)
list.set(2, 6)
list.set(3, 7)
list.reverse()
console.log('first', list);
// 4 -> 5 -> 6 -> 7
// [{val: 1, next: {val: 2, next: null}}, {val: 2, next: null}]
//
