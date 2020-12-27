class Graph{
  adjList: object;

  constructor(){
    this.adjList = {};
  }

  // Average O(1)
  public addVertex(vertex: string): void{
    if(!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  
  // Average O(1)
  public addEdge(vertex1: string, vertex2: string): void{
    if(this.adjList[vertex1] && this.adjList[vertex2]){
      this.adjList[vertex1].push(vertex2);
      this.adjList[vertex2].push(vertex1);
    }
  }

  // Average O(N)
  public removeVertex(vertex: string): void{
    this.adjList[vertex].filter(neighbour => {
      this.removeEdge(vertex , neighbour);
    });
    delete this.adjList[vertex];
  }

  // Average O(N)
  public removeEdge(vertex1: string , vertex2: string): void{
    if(this.adjList[vertex1] && this.adjList[vertex2]){
      this.adjList[vertex1] = this.adjList[vertex1].filter(vtx => vtx !== vertex2);
      this.adjList[vertex2] = this.adjList[vertex2].filter(vtx => vtx !== vertex1);
    }
  }

  // Average O(N)
  public bfs(start: string): string[]{
    const result = [];
    const visited = {}
    const queue = [start];

    visited[start] = true;
    while(queue.length){
      const poppedNode = queue.pop();
      result.push(poppedNode);
      this.adjList[poppedNode].forEach(ngh => {
        if(!visited[ngh]){
          visited[ngh] = true;
          queue.push(ngh);
        }
      })
    }

    return result;
  }

  // Average O(N)
  public dfsIterative(start: string): string[]{
    const result = [];
    const visited = {};
    const stack = [start];

    visited[start] = true;
    while(stack.length){
      const shiftedNode = stack.shift();
      result.push(shiftedNode);
      this.adjList[shiftedNode].forEach(ngh => {
        if(!visited[ngh]){
          visited[ngh] = true;
          stack.push(ngh);
        }
      })
    }

    return result;
  }

  // Average O(N)
  public dfsRecursive(start: string): string[]{
    const result = [];
    const visited = {};
    const traverse = (node: string) => {
      result.push(node);
      this.adjList[node].forEach(ngh => {
        if(!visited[ngh]){
          visited[ngh] = true;
          traverse(ngh)
        }
      })
    }
    traverse(start);
    return result;
  }

}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.bfs('A'));
console.log(graph.dfsIterative('A'));
console.log(graph.dfsRecursive('A'));
