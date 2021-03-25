//Count salutes
// Description
// There is a narrow hallway in which people can go right and left only. 
// When two people meet in the hallway, by tradition they must salute each other. 
// People move at the same speed left and right.
// Your task is to write a function that, given a string representation of people moving 
// in the hallway, will count the number of salutes that will occur.
// Note: 2 salutes occur when people meet, one to the other and vice versa.
// Input
// People moving right will be represented by >; 
// people moving left will be represented by <. An example input would be >--<--->->. 
// The - character represents empty space, which you need not worry about.
// Examples
// Input: >----->-----<--<
// Output: 8
// Explanation: Both guys moving right will meet both guys moving left.
// Hence a total of 4 meetings will occur and 8 salutes will occur.
// Input: <---<--->----<
// Ouput: 2
// Explanation: Only one meeting occurs.



//Solution 1
function countSalutes(hallway) {
  let salutes = 0
  let array = hallway.split('')
  console.log(array)
  for (let i = 0; i <array.length; i++) {
    if(array[i] === ">") {
      for (let y=i+1; y<array.length; y++) {
        if (array[y] === "<") { 
      salutes += 2 
          console.log(salutes)
 }
      }  
    }   
  }
   return salutes
}


//Solution 2
function countSalutes(hallway) {
  let hallway2 = hallway.replace(/-/g,‘’)
  let result = 0;
  for (let i=0; i<hallway2.length; i++) {
    if (hallway2[i]==‘>’) {
    for (let j = i ; j<hallway2.length; j++) {
      if (hallway2[j]==‘<’) {
        result += 2
      }
    }
    }
    }
return result;
}