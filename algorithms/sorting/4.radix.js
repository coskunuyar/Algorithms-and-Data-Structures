
const getDigit = (num , index) => {
  const result = Number(Math.abs(num).toString().split('').reverse()[index])
  return result ? result : 0;
}

const getDigitCount = num => Math.abs(num).toString().length;

const getMaxDigitCount = (arr) => {
  let maxCount = 0;
  for(let i=0; i<arr.length; i++){
    maxCount = Math.max(maxCount , getDigitCount(arr[i]));
  }
  return maxCount;
}

const radixSort = (arr) => {
  const maxDigitCount = getMaxDigitCount(arr);
  for(let i=0; i<maxDigitCount; i++){
    const buckets = [[],[],[],[],[],[],[],[],[],[]];
    for(let j=0; j<arr.length; j++){
      const digit = getDigit(arr[j] , i);
      buckets[digit].push(arr[j]);
    }
    arr = [];
    buckets.forEach(bucket => {
      arr = [...arr , ...bucket];
    })
  }
  return arr;
}
