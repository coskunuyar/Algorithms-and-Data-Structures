function Node(value) {
  this.value = value;
  this.next = null;
}

function SSL() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SSL.prototype.push = function (value) {
  const newNode = new Node(value);
  if (this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
};

SSL.prototype.unshift = function (value) {
  if (this.length === 0) {
    this.push(value);
  } else {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
};

SSL.prototype.pop = function () {
  let poppedNode = this.tail;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
  }
  this.length--;
  return poppedNode;
};

SSL.prototype.shift = function () {
  if (this.length === 1) {
    return this.pop();
  } else {
    let poppedNode = this.head;
    this.head = poppedNode.next;
    this.length--;
    return poppedNode;
  }
};

SSL.prototype.get = function (index) {
  if (index < 0 || index > this.length - 1) return;
  let counter = 0;
  let current = this.head;
  while (counter !== index) {
    current = current.next;
    counter++;
  }
  return current;
};

SSL.prototype.set = function (index, value) {
  const foundNode = this.get(index);
  if (!foundNode) return;
  foundNode.value = value;
};

SSL.prototype.insert = function (index, value) {
  if (index === 0) return this.unshift(value);
  if (index === this.length - 1) return this.push(value);
  const newNode = new Node(value);
  const prev = this.get(index - 1);
  const current = this.get(index);
  prev.next = newNode;
  newNode.next = current;
  this.length++;
};

SSL.prototype.remove = function (index) {
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();
  let prev = this.get(index - 1);
  prev.next = prev.next.next;
  this.length--;
};

SSL.prototype.traverse = function () {
  let current = this.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

SSL.prototype.reverse = function () {
  if ([0, 1].includes(this.length)) return;
  let prev = this.head;
  let current = prev.next;
  let next = current.next;

  while (next && next !== this.tail) {
    current.next = prev;

    prev = current;
    current = next;
    next = next.next;
  }

  current.next = prev;
  next.next = current;

  let temp = this.head;
  this.head = this.tail;
  this.tail = temp;
  this.tail.next = null;
};

const list = new SSL();

// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.reverse();
// list.traverse();
