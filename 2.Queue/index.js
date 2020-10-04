function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function Queue() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

Queue.prototype.push = function (value) {
  const newNode = new Node(value);
  if (this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++;
};

Queue.prototype.shift = function () {
  if (this.length === 0) return;
  let shiftedNode = this.head;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
  this.length--;
  return shiftedNode;
};

// const queue = new Queue();
// queue.push(1);
// queue.push(2);
// queue.push(3);

// for (let i = 0; i < 3; i++) {
//   console.log(queue.shift().value);
// }
