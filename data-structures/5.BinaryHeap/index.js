function BinaryMaxHeap() {
  this.storage = [];
}

BinaryMaxHeap.prototype.push = function (value) {
  this.storage.push(value);
  this.bubbleUp();
};

BinaryMaxHeap.prototype.shift = function () {
  const max = this.storage[0];
  const last = this.storage.pop();

  if (this.storage.length > 0) {
    this.storage[0] = last;
    this.sinkDown();
  }

  return max;
};

BinaryMaxHeap.prototype.bubbleUp = function (value) {
  let currentIndex = this.storage.length - 1;
  let parentIndex = Math.floor((currentIndex - 1) / 2);
  while (this.storage[currentIndex] > this.storage[parentIndex]) {
    let temp = this.storage[currentIndex];
    this.storage[currentIndex] = this.storage[parentIndex];
    this.storage[parentIndex] = temp;

    currentIndex = parentIndex;
    parentIndex = Math.floor((currentIndex - 1) / 2);
  }
};

BinaryMaxHeap.prototype.sinkDown = function () {
  let currentIndex = 0;
  while (true) {
    let leftChildIndex = currentIndex * 2 + 1;
    let rightChildIndex = currentIndex * 2 + 2;
    let leftChild = this.storage[leftChildIndex];
    let rightChild = this.storage[rightChildIndex];
    let currentChild = this.storage[currentIndex];

    let swapIndex;

    if (leftChildIndex < this.storage.length && leftChild > currentChild) {
      swapIndex = leftChildIndex;
    }

    if (rightChildIndex < this.storage.length && rightChild > currentIndex) {
      if (!swapIndex) {
        swapIndex = rightChildIndex;
      } else if (swapIndex && rightChild > leftChild) {
        swapIndex = rightChildIndex;
      }
    }

    if (!swapIndex) break;
    let temp = this.storage[currentIndex];
    this.storage[currentIndex] = this.storage[swapIndex];
    this.storage[swapIndex] = temp;

    currentIndex = swapIndex;
  }
};

// const binaryMaxHeap = new BinaryMaxHeap();
// binaryMaxHeap.push(5);
// binaryMaxHeap.push(20);
// binaryMaxHeap.push(-3);
// binaryMaxHeap.push(100);

// for (let i = 0; i < 4; i++) {
//   console.log(binaryMaxHeap.shift());
// }
