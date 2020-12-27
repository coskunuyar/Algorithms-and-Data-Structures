class StackNode{
  value: number;
  next: StackNode;
  prev: StackNode;

  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  public clearConnections(): StackNode{
    delete this.next;
    delete this.prev;
    return this;
  }
}

class Stack{
  head: StackNode;
  tail: StackNode;
  length: number;

  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Average O(1)
  public push(value: number): number{
    const newNode = new StackNode(value);
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

  // Average O(1)
  public pop(): StackNode{
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
