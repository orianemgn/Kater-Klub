//Sum Mixed Array
//https://www.codewars.com/kata/57eaeb9578748ff92a000009/javascript


function sumMix(x){
    let sum = 0;
    for(let i=0; i<x.length; i++){
      sum += Number(x[i])
    }
      return sum
    }