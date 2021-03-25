// Given a string of characters find the first character that occurs only once,
//  e.g., in `supercalifragilisticexpialidocious` it is `f`

function FirstUniqueCharacter(s){
    //you iterate over the string
    for (let i = 0; i<s.length; i++){
      // return each character
      let j = s.charAt(i)
      // if the character == to the last character return
      //indexOf() gets first occurrence of a character and lastIndexOf() gets the last occurrenc
      // if the same then just one character 
      if (s.indexOf(j) == s.lastIndexOf(j)){
        return j; 
      }
    }  
  }