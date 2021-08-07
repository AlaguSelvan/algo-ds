class PriorityQueue {

	constructor() {
		this.queue = [];
	}

	enqueue(element) {
		this.queue.push(element)
	}

	dequeue() {
		// return last value;
		return this.queue.shift()
	}

	sort() {
		this.queue.sort((a, b) => a.distance - b.distance)
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
		const nodes = new PriorityQueue()
		let distances = {};
		let previous = {};
		let path = [];
		let smallest

		for(let vertex in this.adjacencyList) {
			if(vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue({ vertex, distance: 0 })
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue({ vertex, distance: Infinity })
			}
			previous[vertex] = null;
		}
		console.log(nodes)
		while(nodes.queue.length) {
			smallest = nodes.dequeue().vertex
			if(smallest === finish) {
				while(previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if(smallest || distances[smallest] !== Infinity) {
				for(let neighbor in this.adjacencyList[smallest]) {
					// find neighbouring node
					let nextNode = this.adjacencyList[smallest][neighbor]
					// calculate
					let candidate = distances[smallest] + nextNode.distance
					let nextNeighbor = nextNode.node
					if(candidate < distances[nextNeighbor]) {
						distances[nextNeighbor] = candidate;
						previous[nextNeighbor] = smallest;
						nodes.enqueue({ vertex: nextNeighbor, distance: candidate })
					}
				}
			}
		}
		return path.concat(smallest).reverse()
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