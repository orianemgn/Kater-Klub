//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
//Isograms


function isIsogram(str){
    let strLower = str.toLowerCase(); 
    let strSetUnique = new Set(strLower); 
    return str.length === strSetUnique.size ?  true : false; 
  }


  //Solution Simone 

  function isIsogram(str){
    str = str.toLowerCase().split("").sort();
   for (let i = 0; i < str.length; i++) {
     if (str[i] === str[i +1]) {
       return false;
     }
   }
  return true;
 }