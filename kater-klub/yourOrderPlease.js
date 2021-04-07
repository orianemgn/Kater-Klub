//Your order, please
//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
// Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.

function order(words){
    return words.split(' ').sort(function(a,b){
     return a.match(/[1-9]/g) - b.match(/[1-9]/g);
   }).join(' ');
 }


 //solution Florian 
 function order(words) {
    const regEx = /\d+/
    const wordsArr = words.split(' ')
  
    const sorted = wordsArr.sort((a, b) => {
      return a.match(regEx) - b.match(regEx)
    })
  
    return sorted.join(' ')
  }


  //or 
  function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
  }