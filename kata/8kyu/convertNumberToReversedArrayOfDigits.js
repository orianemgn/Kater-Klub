// Convert number to reversed array of digits
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/javascript

function digitize(n) {
    let array = n.toString().split("").reverse()
    let numbersArray = [];
    for(let i=0; i<array.length; i++){
      numbersArray.push(Number(array[i]))
    }
    return numbersArray
  }