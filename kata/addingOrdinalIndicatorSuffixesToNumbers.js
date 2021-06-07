// Adding ordinal indicator suffixes to numbers
// https://www.codewars.com/kata/52dca71390c32d8fb900002b/train/javascript


// My solution shorter 
function numberToOrdinal(n) {
    let suffix = "";
    let array = n.toString().split('').reverse()
    if (n === 0) suffix = "";
      else if (array[1] === "1")suffix = "th"
      else switch(array[0]){
        case "1" : suffix = "st"; break;
        case "2" : suffix = "nd"; break;
        case "3" : suffix = "rd"; break;
        default : suffix = "th"
    } return n + suffix
  }





// My solution 
function numberToOrdinal(n) {
    // create a string for the suffix 
    let suffix = "";
    // transform n in array and inverse it to take the fist or second number 
    let array = n.toString().split('').reverse()
    //loop inside array 
    for (let i=0 ; i< array.length; i++){
    // if 0 no suffix 
      if (n === 0) {
        suffix = ""
        // if the second number = 1, suffix will be th 
      } else if (array[1] === "1"){
        suffix = "th"
        // if the number finish with 1, 2 , 3 or something between 4 and 9 the suffix will change 
      } else {
        switch(array[0]){
        case "1" : 
          suffix = "st";
          break; 
        case "2" : 
          suffix = "nd";
          break; 
        case "3" : 
          suffix = "rd"
          break; 
        default : 
          suffix = "th"
      }
      }
      
    } return n + suffix
  }

  // or 
  function numberToOrdinal(n) {
    // If n equal 0 no suffix 
    if(n == 0) return "0";
    var num = "0" + n;
    
    if(num.slice(-2)[0] == "1") return n.toString()+ "th";
    if(num.slice(-1)[0] == "1") return n.toString()+ "st";
    if(num.slice(-1)[0] == "2") return n.toString()+ "nd";
    if(num.slice(-1)[0] == "3") return n.toString()+ "rd";
  
    return n.toString()+ "th";
  }


  // or 
  function numberToOrdinal(n) {
    var suffix = "th";
    if (n == 0) suffix = "";
    if (n % 10 == 1 && n % 100 != 11) suffix = "st";
    if (n % 10 == 2 && n % 100 != 12) suffix = "nd";
    if (n % 10 == 3 && n % 100 != 13) suffix = "rd";
    return n + suffix;
  }



  // or 
  function numberToOrdinal(n) {
    var fin = "th";
    if (n == 0) fin = "";
    if (n % 10 == 1 && n % 100 != 11) fin = "st";
    if (n % 10 == 2 && n % 100 != 12) fin = "nd";
    if (n % 10 == 3 && n % 100 != 13) fin = "rd";
    return n + fin;
  }

  // or 
  function numberToOrdinal(n) {
    if(n === 0) return "0";
    if(n % 100 < 20 && n % 100 > 10) return n + 'th';
    if(n % 10 === 1) return n + 'st';
    if(n % 10 === 2) return n + 'nd';
    if(n % 10 === 3) return n + 'rd';
    else return n + 'th';
  }