//String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending){ 
    if (ending !== ''){
      return str.slice(-ending.length) === ending ? true : false
    } else return true
   }
   
// or 
function solution(str, ending){
    return str.endsWith(ending);
  }
