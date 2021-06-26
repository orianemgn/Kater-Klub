//https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript
//Coding Meetup #11 - Higher-Order Functions Series - Find the average age

function getAverageAge(list) {
    // thank you for checking out the Coding Meetup kata :)
    //Average = sum age/ number dev
    //iterate in the array of object and sum the age
    // divide sum age/ array.length
    let sumAge = 0; 
    list.forEach(dev => {
      sumAge += dev.age
    });
    return Math.round(sumAge/ list.length)
  }

//or 
  function getAverageAge(list) {
    let count = 0;
    let sum = 0;
    
    for (let dev of list) {
      count++;
      sum += dev.age;
    }
    
    return Math.round( sum / count );
  }