//Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
//https://www.codewars.com/kata/5828713ed04efde70e000346


function countLanguages(list) {
    // declare an empty object
    let count = {}
    
    // iterage over the array of objects 
    list.forEach(candidate => count[candidate.language] = count[candidate.language] || 0  + 1);
    return count
    
  }


function countLanguages(list) {
    // declare empty object
      let languagesObject = {}
    // iterate through the argument array
    // foreach ‘candidate’…
      list.forEach(candidate => {
    // if the value of the candidate’s ‘language’ key does not appear as a key in the languagesObject
        if(!languagesObject[candidate.language]){
    // add the language as a new key with the value of one
          languagesObject[candidate.language] = 1
    // if the language is already a key in the object
        } else {
    // add one to the value
          languagesObject[candidate.language] += 1 
        }
      })
    // return the object containing the new key value pairs
    return languagesObject
    } 