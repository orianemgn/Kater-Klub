//Coding Meetup #2 - Higher-Order Functions Series - Greet developers
// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript


//solution 1
function greetDevelopers(list) {
    list.forEach(developer =>
                 developer.greeting = (`Hi ${developer.firstName}, what do you like the most about ${developer.language}?`)
                )
    return list
  }

//solution 2
function greetDevelopers(list) {
    // thank you for checking out my kata :)
    const betterObject = list.map(el => {
      el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`
    })
    return list
  }