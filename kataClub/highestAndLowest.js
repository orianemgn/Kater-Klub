// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.
// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, 
// and highest number is first.

//solution 1
function highAndLow(str) {
    let numbers = str.split(' ').map(Number)
    return Math.max(...numbers) + ' ' + Math.min(...numbers)
  }

//Solution 2
function highAndLow(numbers){
    let array = numbers.split(' ').sort((a,b) => {
      return a-b
    })
    return highLow = `${array[array.length -1]} ${array[0]}` 
  }

//Solution 3 



//Solution 4
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }