// Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
// https://www.codewars.com/kata/583d972b8bbc0402cf000121/javascript 


function askForMissingDetails(list) {
    // create a new array to push only the dev with missing info 
    let missingInfo = []
    // iterate in the array of object 
    list.forEach(dev => {
      //console.log(Object.values(dev))
      // get the key and value of each object 
      Object.entries(dev).forEach(([key,value]) =>{
       // console.log(key, value)
       //if one value is null the add question to the object 
        if(value === null){
          console.log(key)
          dev.question = 'Hi, could you please provide your ' + key + '.'
          // and push in the new array 
          missingInfo.push(dev)
        }
      })
    })
    return missingInfo
  }
