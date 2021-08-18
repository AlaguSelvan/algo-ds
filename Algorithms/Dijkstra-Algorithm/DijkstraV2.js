class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
		// this.insertTime = Date.now();
	}
}

class PriorityQueue {
	constructor() {
		this.arr = []
	}

	// Method: heap.bubble
	bubble() {
		let idx = this.arr.length - 1;
		let element = this.arr[idx];
		while(idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.arr[parentIdx];
			if(element.priority <= parent.priority) break;
			this.arr[idx] = parent;
			this.arr[parentIdx] = element;
			idx = parentIdx;
		}
	}

	// Method: heap.insert
	enqueue(val, priority) {
		const newNode = new Node(val, priority)
		this.arr.push(newNode)
		this.bubble()
	}


	// Method: heap.extract
	dequeue() {
		let max = this.arr[0];
		let end = this.arr.pop()
		if(this.arr.length > 0) {
			this.arr[0] = end;
			this.sinkDown()
		}
		return max;
	}

	// Method: heap.sinkDown
	sinkDown() {
		let idx = 0;
		let element = this.arr[0];
		while(true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let swap = null;
			let leftChild, rightChild
			if(leftChildIdx < this.arr.length) {
				leftChild = this.arr[leftChildIdx]
				if(leftChild.priority > element.priority) {
					swap = leftChildIdx;
				}
			}
			
			if(rightChildIdx < this.arr.length) {
				rightChild = this.arr[rightChildIdx]
				if(
					(swap === null && rightChild.priority > element.priority) ||
					(swap !== null && rightChild.priority > leftChild.priority)
				) {
						swap = rightChildIdx;
				}
			}
			if(swap === null) break;
			this.arr[idx] = this.arr[swap];
			this.arr[swap] = element;
			idx = swap;
		}

	}
}

class WeightedGraph {

	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if(this.adjacencyList[vertex]) return;
		this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, distance) {

		if(!this.adjacencyList[vertex1]) return
		if(!this.adjacencyList[vertex2]) return

		this.adjacencyList[vertex1].push({node: vertex2, distance})
		this.adjacencyList[vertex2].push({node: vertex1, distance})
	}

	Dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		const path = [];
		let smallest;
		for(let value in this.adjacencyList) {
			if(value === start) {
				distances[value] = 0;
				nodes.enqueue(start, 0)
			} else {
				distances[value] = Infinity;
				nodes.enqueue(start, Infinity)
			}
			previous[value] = null;
		}
		while(nodes.arr.length) {
			smallest = nodes.dequeue().val
			console.log(smallest)
			if(smallest === finish) {
				// keep looping the previous previous values
				while(previous[smallest]) {
					path.push(smallest)
					smallest = previous[smallest]
				}
				break;
				// return shortest path && update distances
			} else if(smallest && distances[smallest] !== Infinity) {
				for(let neighbor of this.adjacencyList[smallest]) {
					let candidate = distances[smallest] + neighbor.distance;
					let nextNeighbor = neighbor.node
					if(candidate < distances[nextNeighbor]) {
						// updating new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						// updating previous - How we got to neighbor
						previous[nextNeighbor] = smallest;
						// enqueuing inpriority queue with new priority
						nodes.enqueue(nextNeighbor, candidate)
					}
				}
			}
		}
		return path.concat(smallest).reverse();
	}
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const dijkstra = graph.Dijkstra('A', 'E')

console.log(dijkstra)