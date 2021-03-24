//List Filtering 
// In this kata you will create a function that takes a list of non-negative 
// integers and strings and returns a new list with the strings filtered out.


function filter_list(l) {
    // Return a new array with the strings filtered out
   
    let numbersOnly = (val) => {
      if (typeof(val) === 'number'){
        return true; 
      }
    }
    let numbers = l.filter(numbersOnly); 
    return numbers
  }


  //solution with the group 
  function filter_list(l) {
    return l.filter(value =>  typeof value === 'number')
   }

   // or 
   function filter_list(l) {
    let filtered = l.filter((new_list) => {
     return typeof new_list !== 'string';
   });
     return filtered
   }