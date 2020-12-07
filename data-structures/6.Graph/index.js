function Graph() {
  this.adjList = {};
}

Graph.prototype.addVertex = function (vertex) {
  if (!this.adjList[vertex]) this.adjList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  if (this.adjList[vertex1] && this.adjList[vertex2]) {
    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1);
  }
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
  if (this.adjList[vertex1] && this.adjList[vertex2]) {
    this.adjList[vertex1] = this.adjList[vertex1].filter(
      (vtx) => vtx !== vertex2
    );
    this.adjList[vertex2] = this.adjList[vertex1].filter(
      (vtx) => vtx !== vertex1
    );
  }
};

Graph.prototype.removeVertex = function (vertex) {
  if (this.adjList[vertex]) {
    this.adjList[vertex].forEach((vtx) => {
      this.removeEdge(vtx, vertex);
    });
    delete this.adjList[vertex];
  }
};

Graph.prototype.BFS = function (startingVertex) {
  const queue = [startingVertex];
  const visited = {};
  const result = [];
  visited[startingVertex] = true;

  while (queue.length) {
    let current = queue.shift();
    result.push(current);
    this.adjList[current].forEach((ngh) => {
      if (!visited[ngh]) {
        visited[ngh] = true;
        queue.push(ngh);
      }
    });
  }

  return result;
};

Graph.prototype.DFSIterative = function (startingVertex) {
  const stack = [startingVertex];
  const visited = {};
  const result = [];
  visited[startingVertex] = true;

  while (stack.length) {
    let current = stack.pop();
    result.push(current);
    this.adjList[current].forEach((ngh) => {
      if (!visited[ngh]) {
        visited[ngh] = true;
        stack.push(ngh);
      }
    });
  }

  return result;
};

Graph.prototype.DFSRecursive = function (startingVertex) {
  const result = [];
  const visited = {};

  const traverse = (vertex) => {
    visited[vertex] = true;
    result.push(vertex);
    this.adjList[vertex].forEach((ngh) => {
      if (!visited[ngh]) {
        traverse(ngh);
      }
    });
  };
  traverse(startingVertex);
  return result;
};

// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'F');

// console.log(graph.BFS('C'));
// console.log(graph.DFSIterative('C'));
// console.log(graph.DFSRecursive('C'));
