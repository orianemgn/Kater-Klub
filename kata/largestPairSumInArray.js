//Largest pair sum in array
//https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript 

function largestPairSum(numbers){
    let max = numbers.reduce(function(a,b){
      return Math.max(a,b)
    });
    let secondMax = numbers.sort(function(a,b){return b - a;})[1];
    return secondMax + max
  }
  
  
  // or 
  
  function largestPairSum(numbers){
    numbers.sort(function(a, b){ return b - a });
    return numbers[0] + numbers[1];
  }