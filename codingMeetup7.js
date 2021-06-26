//https://www.codewars.com/kata/582887f7d04efdaae3000090/train/javascript
// Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer


function findSenior(list) {
    // thank you for checking out the Coding Meetup kata :)
    let age = []
    // iterate in the array of Object and push the age in array
    list.forEach(dev => {
      age.push(dev.age)
    })
    // find the max number in the array 
    let ageMax = Math.max(...age)
    console.log(ageMax)
    // filter the list with the max number 
    return list.filter(dev => dev.age === ageMax)
  }

// or 

  function findSenior(list) {
    var maxAge = Math.max(...list.map(person => person.age));
    return list.filter(person => person.age === maxAge);
  }