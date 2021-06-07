//Binary Addition
//https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript


function addBinary(a,b){
    if(a+b >= 0){
      return (a+b).toString(2)
    } else {
      return (~(a+b).toString(2))
    }
  }