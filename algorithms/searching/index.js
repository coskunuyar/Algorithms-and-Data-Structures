const linerSearch = (arr,value) => {
  let index = -1;
  for(let i=0; i<arr.length; i++){
    if(arr[i] === value) index = i;
  }
  return index;
}

const binarySearch = (arr,value) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end ) / 2);

  while(arr[middle] !== value && start <= end){
    if(value < arr[middle]){
      end = middle-1;
    } else {
      start = middle+1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === value ? middle : -1;
}

const naiveStringSearch = (text , value) => {
  let count = 0;
  for(let i=0; i<text.length; i++){
    for(let j=0; j<value.length; j++){
      if(value[j] !== text[i+j]) break;
      if(j === value.length - 1) count++;
    }
  }
  return count;
}