//https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
//Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

function countDevelopers(list) {
    // your awesome code here :)
    // create a variable count
    // iterate in the array of objects and if developers come from Europe add + 1 to the count
    let count = 0;
    list.forEach(developer => {
      if(developer.continent === "Europe" && developer.language === "JavaScript"){
        count ++
      }
    });
    return count
  }