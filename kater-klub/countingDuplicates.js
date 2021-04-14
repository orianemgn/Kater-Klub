//Counting Duplicates
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
    // declare a variable which is the argument string in lowercase
    let lowerCaseText = text.toLowerCase();
    //declare a count variable
    let count = 0;
    //declare a empty array 
    let arr = [];
    // split lowercase string into array of letters
    lower.split('')
    //iterating over array of letters
    .forEach(function(letter) {
        //if arr doesn't include the current value 
      if (!arr.includes(letter) 
      // and the number of repetitions of the value in the string is larger than 1
      && (lowerCaseText.split(letter).length - 1) > 1) {
        // add one to the counter 
        count++;
        //push the letter in the array 
        arr.push(letter);
      }
    });
    
    return count;
  }