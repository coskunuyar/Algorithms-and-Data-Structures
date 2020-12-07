const insertionSort = (arr) => {
  let currentValue;
  for(let i=0; i<arr.length; i++){
    currentValue = arr[i];
    let j;
    for( j = i-1; j>=0 && arr[j] > currentValue; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  }
  return arr;
}