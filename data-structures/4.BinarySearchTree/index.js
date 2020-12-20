class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  // Average O(logn)
  insert(value){
    const newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
    }else{
      let current = this.root;
      let isNotInserted = true;
      while(isNotInserted){
        if(value < current.value){
          if(current.left){
            current = current.left
          }else{
            current.left = newNode;
            isNotInserted = false;
          }
        }else if(value > current.value){
          if(current.right){
            current = current.right;
          }else{
            current.right = newNode;
            isNotInserted = false;
          }
        }
      }
    }
  }

  // Average O(n)
  bfs(){
    if(!this.root) return;
    const visited = [];
    const stack = [this.root];
    while(stack.length){
      const poppedNode = stack.shift();
      visited.push(poppedNode.value);
      poppedNode.left && stack.push(poppedNode.left);
      poppedNode.right && stack.push(poppedNode.right);
    }
    return visited;
  }

  // Average O(n)
  dfsPreOrder(){
    if(!this.root) return;
    const visited = [];
    const traverse = (node) => {
      visited.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  // Average O(n)
  dfsInOrder(){
    if(!this.root) return;
    const visited = [];
    const traverse = (node) => {
      node.left && traverse(node.left);
      visited.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  // Average O(n)
  dfsPostOrder(){
    if(!this.root) return;
    const visited = [];
    const traverse = (node) => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log(tree.bfs());
console.log(tree.dfsPreOrder())
console.log(tree.dfsInOrder())
console.log(tree.dfsPostOrder())
