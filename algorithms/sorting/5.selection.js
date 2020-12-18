const selectionSort = (arr) => {
  for(let i=0; i<arr.length; i++){
    let lowest = i;
    for(let j=i; j<arr.length; j++){
      if(arr[j] < arr[lowest]){
        lowest = j;
      }
    }
    if(lowest !== i){
      const temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([5,4,3,2,1,99]));