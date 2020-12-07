const getDigit = (num , i) => {
  return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

const digitCount = (num) => {
  if(num === 0) return;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums) => {
  let maxDigits = 0;
  nums.forEach(num => {
    maxDigits = Math.max(maxDigits ,digitCount(num));
  });
  return maxDigits;
}

const radixSort = nums => {
  let maxDigitCount = mostDigits(nums);
  for(let k=0; k<maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, () => []);
    for(let i=0; i<nums.length; i++){
      let digit = getDigit(nums[i],k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23,345,5467,12,2345,922852]));