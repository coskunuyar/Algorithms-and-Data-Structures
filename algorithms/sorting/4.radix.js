// Big O 
// Average: O(kn)
const radixSort = (arr) => {
  const maxDigitCount = getMaxDigitCount(arr);
  for(let i=0; i<maxDigitCount; i++){
    const digitBuckets = [[],[],[],[],[],[],[],[],[],[]];
    for(let j=0; j<arr.length; j++){
      const digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }
    arr = [];
    digitBuckets.forEach(bucket => {
      arr = [...arr , ...bucket];
    })
  }
  return arr;
}

const getMaxDigitCount = (arr) => {
  let maxDigitCount = 0;
  for(let i=0; i<arr.length; i++){
    maxDigitCount = Math.max(maxDigitCount , Math.abs(arr[i]).toString().length)
  }
  return maxDigitCount;
}

const getDigit = (num , index ) => {
  const result = Number(Math.abs(num).toString().split('').reverse()[index])
  return result ? result : 0;
}

console.log(radixSort([5,4,3,2,1]));
