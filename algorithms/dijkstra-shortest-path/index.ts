class Queue{
  storage: any[];

  constructor(){
    this.storage = [];
  }

  public enqueue(key: string, priority: number): void {
    this.storage = this.storage.filter((item) => item.key !== key);
    this.storage.push({ key, priority });
    this.storage.sort((a, b) => a.priority - b.priority);
  };
  
  public dequeue(): { key: string , priority: number }{
    return this.storage.shift();
  }; 
}

class Graph{
  adjacencyList: object;

  constructor(){
    this.adjacencyList = {};
  }

  public addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  };

  public addEdge(vertex1: string, vertex2: string, weight: number): void{
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  };
  
  public dijkstra(start: string, finish: string): string[]{
    const queue = new Queue();
    const distances = {};
    const previous = {};
    const shortestPath = [];
    let smallest, candidate;
  
    for (let node in this.adjacencyList) {
      if (node === start) {
        distances[node] = 0;
        queue.enqueue(node, 0);
      } else {
        distances[node] = Infinity;
        queue.enqueue(node, Infinity);
      }
      previous[node] = null;
    }
  
    while (queue.storage.length) {
      smallest = queue.dequeue().key;
      if (smallest === finish) {
        while (previous[smallest]) {
          shortestPath.push(smallest);
          smallest = previous[smallest];
        }
        break;
      } else {
        for (let neighbor of this.adjacencyList[smallest]) {
          candidate = distances[smallest] + neighbor.weight;
          if (candidate < distances[neighbor.node]) {
            distances[neighbor.node] = candidate;
            previous[neighbor.node] = smallest;
            queue.enqueue(neighbor.node, candidate);
          }
        }
      }
    }
  
    return shortestPath.concat(start).reverse();
  };
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.dijkstra('A', 'E'));
