class BinaryMaxHeap{
  constructor(){
    this.storage = [];
  }

  push(value){
    this.storage.push(value);
    this.bubbleUp();
  }

  shift(){
    const max = this.storage[0];
    const poppedNode = this.storage.pop();
    if(this.storage.length > 0){
      this.storage[0] = poppedNode;
      this.sinkDown();
    }
    return max;
  }

  bubbleUp(){
    let currentIndex = this.storage.length - 1;
    let parentIndex = Math.floor(( currentIndex -1 ) / 2);
    while(this.storage[currentIndex] > this.storage[parentIndex]){
      const temp = this.storage[parentIndex];
      this.storage[parentIndex] = this.storage[currentIndex];
      this.storage[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(( currentIndex - 1) / 2);
    }
  }

  sinkDown(){
    let currentIndex = 0;
    while(true){
      let leftChildIndex = 2*currentIndex + 1;
      let rightChildIndex = 2*currentIndex + 2;
      let leftChild = this.storage[leftChildIndex];
      let rightChild = this.storage[rightChildIndex];
      let current = this.storage[currentIndex];

      let swapIndex;
      if(leftChildIndex < this.storage.length && leftChild > current){
        swapIndex = leftChildIndex;
      }

      if(rightChildIndex < this.storage.length && rightChild > current){
        if(!swapIndex){
          swapIndex = rightChildIndex;
        }else{
          if(rightChild > current){
            swapIndex = rightChildIndex;
          }
        }
      }

      if(!swapIndex) break;
      if(swapIndex){
        const temp = this.storage[swapIndex];
        this.storage[swapIndex] = this.storage[currentIndex];
        this.storage[currentIndex] = temp;
        currentIndex = swapIndex;
      }
    }
  }

}

const binaryMaxHeap = new BinaryMaxHeap();
binaryMaxHeap.push(5);
binaryMaxHeap.push(20);
binaryMaxHeap.push(-3);
binaryMaxHeap.push(100);

for (let i = 0; i < 4; i++) {
  console.log(binaryMaxHeap.shift());
}
