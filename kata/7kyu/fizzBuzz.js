// https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript
// Fizz Buzz

function fizzbuzz(n){
    let array = []
    for(let i=1; i<=n; i++){
      array.push(i)
    }
    for(let j=0; j<array.length;j++){
      if(array[j]%3 ===0 && array[j]%5 ===0){
        console.log(array[j])
        array[j] = "FizzBuzz"
      } else if (array[j]%3 === 0){
        array[j] = "Fizz"
      } else if(array[j]%5 === 0){
        array[j] = "Buzz"
      }
    }
    return array
  }