//Sort the Vowels
//https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/javascript

function sortVowels(s){
    if(s == undefined || null || Number.isInteger(s)){  
      return ""
    }
    let array = s.split("");
    let finalArray = [];
    for (let i =0; i<array.length; i++){
      if(array[i] == "a" || array[i] == "e" || array[i] == "i" || array[i] == "o" || array[i] == "u" || array[i] == "A" || array[i] == "E" || array[i] == "I" || array[i] == "O" || array[i] == "U"){
        finalArray.push("|"+array[i])
      } else {
        finalArray.push(array[i]+"|")
      }
    }
    return finalArray.join("\n")
  }