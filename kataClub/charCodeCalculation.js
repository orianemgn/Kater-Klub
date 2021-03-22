//Char Code Calculation 
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6


// Solution 1 
function calc(x){
  
    let total1= '';
    let toal2='';
    let t1 = 0;
    let t2= 0; 
    //get the ASCII value in JavaScript for the characters 
     for (let i=0; i < x.length; i++) {
     total1 += x.charCodeAt(i)
   }
    // replace 7 with 1
    total2 = total1.replace(/7/gi, '1')
    
    // Sum of element in the string 
    for(number of total1){
      t1 += parseInt(number, 10)
    }
     for (number of total2) {
     t2 += parseInt(number,10)
    }
    return t1-t2
  }


  //Solution 2 
  function calc(x){
    //get the ASCII value in JavaScript for the characters 
    let ascii = [];
    for (let i = 0; i< x.length; i++){
      //console.log(x.charCodeAt(i))
      ascii.push(x.charCodeAt(i))
    }
    //transform array in string 
    const total1 = ascii.join('')
    // replace any incidence of 7 with 1
    const total2 = total1.split('').map(char => (char === '7') ? char = '1' : char = char).join('');
    
    
    //transform them again in array and sum element 
    let reduceTotal1 = total1.split('').reduce((a,b) => Number(a) + Number(b));
    
    let reduceTotal2 = total2.split('').reduce((a,b) => Number(a) + Number(b));
    
    return reduceTotal1 - reduceTotal2 
  }