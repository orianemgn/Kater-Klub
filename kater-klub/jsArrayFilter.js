//JavaScript Array Filter
// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

function getEvenNumbers(numbersArray){
    return numbersArray.filter(number => number % 2 === 0) 
   }

//or 
const getEvenNumbers = (numbersArray) => numbersArray.filter(num => num % 2 === 0)