function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function Stack() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

Stack.prototype.push = function (value) {
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

Stack.prototype.pop = function () {
  if (this.length === 0) return;
  let poppedNode = this.tail;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  this.length--;
  return poppedNode;
};

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);

// for (let i = 0; i < 3; i++) {
//   console.log(stack.pop().value);
// }
