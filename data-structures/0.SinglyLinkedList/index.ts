class ListNode{
  value: any;
  next: ListNode;

  constructor(value: any){
    this.value = value;
    this.next = null;
  }

  public clearConnections(): ListNode{
    delete this.next;
    return this;
  }
}

class SinglyLinkedList{
  head: ListNode;
  tail: ListNode;
  length: number;

  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Average: O(1)
  public push(value: any): number{
    const newNode = new ListNode(value);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this.length;
  }

  // Average: O(1)
  public unshift(value: any): number{
    if(this.length === 0) return this.push(value);
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    return ++this.length;
  }

  // Average: O(n)
  public pop(): ListNode{
    if(this.length === 0) return;
    const poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      let newTail = this.head;
      while(newTail.next){
        if(newTail.next === this.tail) break;
        newTail = newTail.next;
      }
      this.tail = newTail;
    }
    this.length--;
    return poppedNode.clearConnections();
  }

  // Average: O(1)
  public shift(): ListNode{
    if(this.length === 1) return this.pop();
    const shiftedNode = this.head;
    this.head = shiftedNode.next;
    this.length--;
    return shiftedNode.clearConnections();
  }

  // Average: O(n)
  public get(index: number): ListNode{
    if(index < 0 && index > this.length) return;
    let current = this.head;
    let count = 0;
    while(count !== index){
      current = current.next;
      count++;
    }
    return current;
  }

  // Average: O(n)
  public set(index: number , value: any): ListNode{
    const foundNode = this.get(index);
    foundNode.value = value;
    return foundNode;
  }

  // Average: O(n)
  public insert(index: number , value: any): number{
    if(index < 0 || this.length < index) return;
    if(index === 0) return this.unshift(value);
    if(index === this.length ) return this.push(value);
    const newNode = new ListNode(value);
    const prev = this.get(index - 1);
    const next = this.get(index);
    prev.next = newNode;
    newNode.next = next;
    return ++this.length;
  }

  public reverse(): void{
    if(this.length === 0 || this.length === 1) return;
    let prev = this.head;
    let current = this.head.next;
    let next = this.head.next.next;

    while( next !== this.tail && next){
      current.next = prev;

      prev = current;
      current = next;
      next = next.next;
    }

    next && (next.next = current);
    current.next = prev;

    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    this.tail.next = null;
  }

  public traverse(): void{
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.unshift(0);
list.insert(3,-999);

list.traverse();
