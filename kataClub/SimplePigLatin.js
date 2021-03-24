// Simple Pig Latin
// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.

//solution 1
function pigIt(str){
    return str.split(' ').map(word => {if (word !== '!' && word !=='?' && word!== '.')
    {return word.slice(1) + word.slice(0,1) + 'ay'; } return word;}).join(' '); 
  }
  



//solution 2
function pigIt(str){
    //split the string into words using (i )
    return str.split(' ')
    // map over the array 
    .map(word =>
        //check if 'word' is not punctuation
    (/[a-zA-Z]/).test(word) ?
    //if true 
    //remove the first character using split(1)
    //add the first character at the end 
    //contact together using template literal +ay
    `${word.slice(1)}${word[0]}ay`
    //if false return the first character of word 
         : word[0])
         //join the array together into a string 
  .join(' ')
  }