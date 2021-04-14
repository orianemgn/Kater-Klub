//Isograms
//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

//my solution 
function isIsogram(str){
    //transform the string in lower case and in a array of letters
    lowerCaseArray = (str.toLowerCase()).split('')
    console.log(lowerCaseArray)
    // make a duplicate of the array without duplicated letter
   let unique = [...new Set(lowerCaseArray)];
    console.log(unique)
    // compare the length of the array, of they have the same lenght we have no duplicate, if not we have duplicates
  if(lowerCaseArray.length !== unique.length){
    return false;
  } else {
    return true
  }
  }


  //solution Adam 
  function isIsogram(str){
    str = str.toLowerCase();
    const strToArr = str.split(“”)
    const repsHolder = []
    const checkForRep = strToArr.map((el,index) => {
      if(strToArr.indexOf(el) !== index){
        repsHolder.push(el)
      }
    })
    if(repsHolder.length === 0) {
      return true
    } else {
      return false
    }
  }

  //Solution Simone 
  function isIsogram(str){
    str = str.toLowerCase().split("").sort();
    for (let i=0; i<str.length; i++){
      if (str[i] === str[i+1]) return false;
      }
    return true;
  }

  //Solution Ivan 
  function isIsogram(str){
    let arrLowercaseLetters = (str.toLowerCase()).split("")
    let count = 0
    arrLowercaseLetters.forEach(char => {
      (arrLowercaseLetters.indexOf(char) !== arrLowercaseLetters.lastIndexOf(char)) > 0 && count++
    })
    return count < 2 ? true : false
  }

  //Solution Simon 
  function isIsogram(str){
    let lowercaseString = str.toLowerCase()
    console.log(lowercaseString)
    let counter = 0
    let arrOfDuplicates = []
    lowercaseString.split('')
    .forEach(letter => {
      if (!arrOfDuplicates.includes(letter) 
          && (lowercaseString.split(letter).length-1) > 1) {
        counter++;
        arrOfDuplicates.push(letter);
      }
    })
    return counter > 0 ? false : true 
  }


  //shorter solution 
  function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

  // shorter solution 
  function isIsogram (str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
  }