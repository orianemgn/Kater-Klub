// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript
// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

function findAdmin(list, lang) {
    // thank you for checking out the Coding Meetup kata :)
   let filteredList = list.filter((dev)=> dev.language === lang && dev.githubAdmin === 'yes'); 
    return filteredList                             
    
  }
  