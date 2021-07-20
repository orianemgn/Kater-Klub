//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
// Factorial 

function factorial(n){
    let result = 1; 
    if(n<0 || n > 12){
      throw new RangeError
    }
    let array = []
    for(let i=1; i<=n; i++){
      array.push(i)
    }
    for(let j=0; j<array.length; j++){
      result = result * array[j]
    }
    return result
  }