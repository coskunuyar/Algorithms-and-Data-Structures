const insertion = (arr) => {
  for(let i=0; i<arr.length; i++){
    const currentValue = arr[i];
    let j;
    for( j = i-1; j>=0 && arr[j] > currentValue; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  }
  return arr;
}

console.log(insertion([5,4,3,2,1,-99]));
