function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function (value) {
  const newNode = new Node(value);
  if (!this.root) {
    this.root = newNode;
  } else {
    let current = this.root;
    while (true) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return;
        }
      } else if (current.value < value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return;
        }
      } else {
        return;
      }
    }
  }
};

BST.prototype.BFS = function () {
  if (!this.root) return;
  const queue = [];
  const visited = [];

  queue.push(this.root);

  while (queue.length) {
    let shiftedNode = queue.shift();
    visited.push(shiftedNode.value);

    shiftedNode.left && queue.push(shiftedNode.left);
    shiftedNode.right && queue.push(shiftedNode.right);
  }

  return visited;
};

BST.prototype.DFSPreOrder = function () {
  if (!this.root) return;
  const visited = [];
  const traverse = (node) => {
    visited.push(node.value);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  };
  traverse(this.root);
  return visited;
};

BST.prototype.DFSInOrder = function () {
  if (!this.root) return;
  const visited = [];
  const traverse = (node) => {
    node.left && traverse(node.left);
    visited.push(node.value);
    node.right && traverse(node.right);
  };
  traverse(this.root);
  return visited;
};

BST.prototype.DFSPostOrder = function () {
  if (!this.root) return;
  const visited = [];
  const traverse = (node) => {
    node.left && traverse(node.left);
    node.right && traverse(node.right);
    visited.push(node.value);
  };
  traverse(this.root);
  return visited;
};

BST.prototype.contains = function (value) {
  if (!this.root) return;
  return this.BFS().contains(value);
};

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(-10);
bst.insert(99);

console.log(bst.DFSPostOrder());
