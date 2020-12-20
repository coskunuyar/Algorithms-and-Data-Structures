// Big O
// Average: O(nlogn)
const quickSort = (arr , start = 0 , end = arr.length - 1) => {
  if(start < end){
    const swapIndex = pivot(arr , start , end);
    quickSort(arr , start , swapIndex - 1);
    quickSort(arr , swapIndex + 1 , end);
  }
  return arr;
}

const pivot = (arr , start = 0 , end = arr.length - 1) => {
  const swap = (array , index1 , index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp; 
  }

  const pivotValue = arr[start];
  let swapIndex = start;
  let i;
  for(i=start; i<=end; i++){
    if(arr[i] < pivotValue){
      swapIndex++;
      swap(arr,swapIndex , i)
    }
  }
  swap(arr , swapIndex , start);
  return swapIndex;
}

console.log(quickSort([3,1,2,4,5,-99]));
