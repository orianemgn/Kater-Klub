// Which are in?
//https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

//My solution 
function inArray(array1,array2){
    let r= []
    for (let i=0; i<array1.length; i++){
      for (let j=0; j<array2.length; j++){
        if (array2[j].includes(array1[i])){
          r.push(array1[i])
        }
      }
    } return [...new Set(r)].sort(); 
  }



//Florian Solution 
function inArray(array1, array2) {
    let subStrings = []
    for (let subStr of array1) {
      for (let string of array2) {
        if (string.includes(subStr)) {
          subStrings.push(subStr)
        }
      }
    }
    return [...new Set(subStrings)].sort()
  }