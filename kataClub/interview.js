// Given a string of characters find the first character that occurs only once,
//  e.g., in `supercalifragilisticexpialidocious` it is `f`


//My solution 
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


  //Solution Hai 
  function findCharacter(str) {
    const charOccObj = str.split("").reduce((obj, char) => {
      obj[char] = obj[char] === undefined ? 1 : obj[char] + 1;
      return obj;
    }, {})
    for (let key in charOccObj) {
      if (charOccObj[key] === 1) return key;
    }
  }

  //Solution Michael 
  function firstOccurance(s) {
    const compareObj = {};
    for(i=0; i < s.length; i++) {
      (compareObj[s[i]] === undefined) ? compareObj[s[i]] = 1 : compareObj[s[i]]++;
    }
    const firstIndex = Object.values(compareObj).indexOf(1);
    return Object.keys(compareObj)[firstIndex]
  }