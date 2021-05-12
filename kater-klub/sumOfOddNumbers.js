//Sum of odd numbers
//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

function rowSumOddNumbers(n) {
	// TODO
  let oddNumbers = [];
  let startNumber = (n*n) - (n-1);
  console.log(startNumber)
  while(n > 0){
        oddNumbers.push(startNumber);
        startNumber +=2;
        n--;
      }
  let sum = oddNumbers.reduce((a,b) => a+b, 0);
  return sum;
}


function rowSumOddNumbers(n) {
	// TODO
  return n*n*n
}


//Adam solution 
function rowSumOddNumbers(n) {
	
    const targetNumber = (n*n) + n - 1;
    const sequence = [];
    for(let i = 0; i <= targetNumber; i++){
      if(i % 2 !== 0){
        sequence.push(i)
      }
    }
    const sliceSequence = sequence.slice(sequence.length - n)
    const sum = sliceSequence.reduce((a,b) => a+b)
    return sum
  }
  rowSumOddNumbers(3)