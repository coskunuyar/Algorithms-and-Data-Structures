
// Average: O(n^2)
const bubbleSort = (arr: number[]): number[] => {
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[j] > arr[j+1]){
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5,4,3,2,1,99]));