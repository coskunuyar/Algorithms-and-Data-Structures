class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  clearConnections(){
    delete this.next;
    delete this.prev;
    return this;
  }
}

class Stack{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return ++this.length;
  }

  pop(){
    if(this.length <= 0) return;
    const poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      const newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return poppedNode.clearConnections();
  }
}

const stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

for(let i=0; i<5; i++){
  console.log(stack.pop());
}
