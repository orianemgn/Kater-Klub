// Coding Meetup #10 - Higher-Order Functions Series - Create usernames
// https://www.codewars.com/kata/582a53ed261c2af9d200018c 

function addUsername(list) {
    //itera in the array of object to find the first name, last name first later and birth year 
    list.forEach(dev => {
      let firstPartUsername = (dev.firstName + dev.lastName.charAt(0)).toLowerCase()
      let birth = new Date().getFullYear() - dev.age.toString()
      // put them together
      let usernameFinal = firstPartUsername + birth
     // add them to each object 
      dev.username = usernameFinal
    })
    return list
  }