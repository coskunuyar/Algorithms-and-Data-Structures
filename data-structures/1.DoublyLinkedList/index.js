function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

Node.prototype.clearConnections = function () {
  this.next = null;
  this.prev = null;
};

function DLL() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DLL.prototype.push = function (value) {
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

DLL.prototype.unshift = function (value) {
  if (this.length === 0) {
    this.push(value);
  } else {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
};

DLL.prototype.pop = function () {
  if (this.length === 0) return;
  const poppedNode = this.tail;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = poppedNode.prev;
    poppedNode.prev = null;
    this.tail.next = null;
  }
  this.length--;
  return poppedNode;
};

DLL.prototype.shift = function () {
  if (this.length === 0) return;
  if (this.length === 1) {
    return this.pop();
  } else {
    const shiftedNode = this.head;
    this.head = shiftedNode.next;
    shiftedNode.next = null;
    this.head.prev = null;
    this.length--;
    return shiftedNode;
  }
};

DLL.prototype.get = function (index) {
  const middle = Math.floor(this.length / 2);
  let current, counter;
  if (index >= middle) {
    counter = this.length - 1;
    current = this.tail;
    while (counter !== index) {
      current = current.prev;
      counter--;
    }
  } else {
    counter = 0;
    current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
  }
  return current;
};

DLL.prototype.set = function (index, value) {
  const foundNode = this.get(index);
  if (foundNode) foundNode.value = value;
};

DLL.prototype.remove = function (index) {
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();
  let current = this.get(index);
  let prev = current.prev;
  let next = current.next;
  prev.next = next;
  next.prev = prev;
  current.clearConnections();
  this.length--;
  return current;
};

DLL.prototype.insert = function (index, value) {
  if (index === 0) return this.unshift(value);
  if (index === this.length - 1) return this.push(value);
  const newNode = new Node(value);
  let current = this.get(index);
  let prev = current.prev;
  prev.next = newNode;
  newNode.prev = prev;
  newNode.next = current;
  current.prev = newNode;
};

// const list = new DLL();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.insert(2, 999999);

// for (let i = 0; i < 4; i++) {
//   console.log(list.shift().value);
// }
