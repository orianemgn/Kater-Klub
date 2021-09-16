//https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
//Short Long Short

function solution(a, b){
    return a.length < b.length ? a+b+a : b+a+b; 
  }