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

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Average O(1)
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

  // Average O(1)
  unshift(value){
    if(this.length === 0) return this.push(value);
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    return ++this.length;
  }

  // Average O(1)
  pop(){
    if(this.length === 0) return;
    const poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return poppedNode.clearConnections();
  }

  // Average O(1)
  shift(){
    if(this.length === 0) return this.pop();
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

  // Average O(N)
  get(index){
    if(index < 0 || index > this.length-1) return;
    const mid = Math.floor(this.length / 2);
    let current;
    let count;
    if(index >= mid){
      current = this.tail;
      count = this.length - 1;
      while(count !== index){
        current = current.prev;
        count--;
      }
    }else{
      current = this.head;
      count = 0;
      while(count !== index){
        current = current.next;
        count++;
      }
    }
    return current;
  }

  // Average O(N)
  set(index , value){
    const foundNode = this.get(index);
    foundNode && (foundNode.value = value);
    return foundNode;
  }

  // Average O(N)
  insert(index , value){
    if(index < 0 || index > this.length -1) return;
    const newNode = new Node(value);
    const prev = this.get(index-1);
    const next = this.get(index);
    prev.next = newNode;
    newNode.prev = prev;
    next.prev = newNode;
    newNode.next = next;
    return ++this.length;
  }

  // Average O(N)
  remove(index){
    if(index === 0 ) return this.shift();
    if(index === this.length - 1) return this.pop();
    const prev = this.get(index-1);
    const current = this.get(index);
    const next = this.get(index+1);
    prev.next = next;
    next.prev = prev;
    return current.clearConnections();
  }

  traverse(){
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.remove(0)

list.traverse();
