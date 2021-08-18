class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		// this.depth = null; // Not needed for BST
	}
}


class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	
	// Recursive approach Time O(log(n)) Space O(log(n))
	insert_recursive(value, root = this.root) {
		const newNode = new Node(value);
		if (!root) {
			root = newNode;
			return;
		} else if(value < root.value) {
			if (!root.left) {
				root.left = newNode;
			} else {
				this.insert(value, root.left);
			}
		} else if (value > root.value) {
			if(!root.right) {
				root.right = newNode;
			} else {
				this.insert(value, root.right)
			}
		}
	}

	// Iterative approach Time O(log(n)) Space O(1)
	insert(value) {
		let root = this.root
		let newNode = new Node(value);
		while(true) {
			if(newNode.value < root.value) {
				if(!root.value.left) {
					root.value.left = newNode;
					return this;
				}
				root = root.left;
			} else if(newNode.value > root.value) {
				if(!root.value.left) {
					root.value.left = newNode;
					return this;
				}
				root = root.right;
			}
		}
	}

	// Average Time O(log(n)) Space O(1)
	// Worst Time O(N) Space O(1)
	contains(value) {
		let root = this.root
		while(root) {
			if(value < root.value) {
				root = root.left;
			} else if(value > root.value) {
				root = root.right;
			} else if (value === root.value) {
				return true;
			}
		}
		return false;
	}

	// Average Time O(log(n)) Space O(log(n))
	// Worst Time O(n) Space O(n)
	// TODO: Implement
	remove(value, parentNode = null) {
		let root = this.root;

	}

	getMinValue() {
		
	}

}