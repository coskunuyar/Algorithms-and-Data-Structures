const bubbleSort = (arr) => {
  let isAlreadySorted;

  for(let i=arr.length; i>0; i--){
    isAlreadySorted = true;
    for(let j=0; j<i-1; j++){
      if(arr[j] > arr[j+1]){
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;

        isAlreadySorted = false;
      }
    }
    if(isAlreadySorted) break;
  }
  return arr;
}