class Graph{
  constructor(){
    this.adjList = {};
  }

  addVertex(vertex){
    if(!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  
  addEdge(vertex1 , vertex2){
    if(this.adjList[vertex1] && this.adjList[vertex2]){
      this.adjList[vertex1].push(vertex2);
      this.adjList[vertex2].push(vertex1);
    }
  }

  removeVertex(vertex){
    this.adjList[vertex].filter(neighbour => {
      this.removeEdge(vertex , neighbour);
    });
    delete this.adjList[vertex];
  }

  removeEdge(vertex1 , vertex2){
    if(this.adjList[vertex1] && this.adjList[vertex2]){
      this.adjList[vertex1] = this.adjList[vertex1].filter(vtx => vtx !== vertex2);
      this.adjList[vertex2] = this.adjList[vertex2].filter(vtx => vtx !== vertex1);
    }
  }

  bfs(start){
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

  dfsIterative(start){
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

  dfsRecursive(start){
    const result = [];
    const visited = {};
    const traverse = (node) => {
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
