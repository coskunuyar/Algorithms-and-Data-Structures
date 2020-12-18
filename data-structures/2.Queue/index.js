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

class Queue{
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
      this.tail = newNode;
    }
    return ++this.length;
  }

  unshift(){
    const shiftedNode = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return shiftedNode.clearConnections();
  }
}

const queue = new Queue();
queue.push(0);
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

for(let i=0; i<5; i++){
  console.log(queue.unshift())
}
