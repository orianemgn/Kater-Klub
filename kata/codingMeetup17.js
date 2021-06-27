//Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
// https://www.codewars.com/kata/583ea278c68d96a5fd000abd/train/javascript

function sortByLanguage(list) {
    //sort the array of object
    let sortedList = list.sort((a,b)=> {
      // if same language sort by firstName
      if (a.language === b.language ) {
        return a.firstName > b.firstName ? 1 : -1;
      }
      // if not the same firstName sort by language
      else {
        return a.language > b.language ? 1 : -1;
      } 
    }); 
    return sortedList
  }