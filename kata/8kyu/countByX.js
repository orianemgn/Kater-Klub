//Count by X
//https://www.codewars.com/kata/5513795bd3fafb56c200049e/javascript

function countBy(x, n) {
    let result = [];
    for(let i=1; i<n+1; i++){
      result.push(i*x)
    }
    return result;
  }