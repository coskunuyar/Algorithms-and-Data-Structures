
const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (array, idx1, idx2) => {
    const temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  };

  let pivotValue = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}


const quickSort = (arr, left = 0, right = arr.length -1) => {
  if(left < right){
      let pivotIndex = pivot(arr, left, right)
      quickSort(arr,left,pivotIndex-1);
      quickSort(arr,pivotIndex+1,right);
  }
  return arr;
} 
           
console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]));


