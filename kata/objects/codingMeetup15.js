//https://www.codewars.com/kata/583a8bde28019d615a000035
//Coding Meetup #15 - Higher-Order Functions Series - Find the odd names

function findOddNames(list) {
    // thank you for checking out the Coding Meetup kata :)
    // create an empty array to push the odd result 
    let oddList = []
    // iterate in the array of objects 
    list.forEach(dev => {
        // split dev first name in array to get each letter of the first Name 
      let arrayFirstName = dev.firstName.split('')
      // create a sum variable to put the sum of ASCII codes of letters 
      let sum = 0 
      // iterate in the firstname array to calculate the sum of each letter transformed with the ASCII codes of letters 
      for(let i=0; i<arrayFirstName.length; i++){
        console.log(arrayFirstName[i].charCodeAt())
        sum += arrayFirstName[i].charCodeAt()
      }
      // check if the sum is odd 
      if(sum % 2 !== 0){
          // if the sum is odd push element in oddList 
        oddList.push(dev)
      }
    })
    return oddList
  }


  var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];
  
  
  findOddNames(list1)