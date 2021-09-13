//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
//Is it a palindrome?

function isPalindrome(x) {
    // your code here
  return x.toLowerCase() == x.toLowerCase().split('').reverse().join('')
  }