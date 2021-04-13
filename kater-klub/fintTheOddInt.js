//Find the odd int
//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

//My solution
function findOdd(A) {
    let count = {}; 
   A.forEach(function(i){count[i] = (count[i]||0) + 1;});
    console.log(count)
   for (number in count){
     if (count[number] % 2 !== 0)
     return parseInt(number)
   }
  }

  //solution Florian 
  function findOdd(arr) {
    for (let int of arr) {
      if (arr.filter(el => el === int).length % 2 !== 0) {
        return int
      }
    }
  }

  //Solution Elvia
  function findOdd(A) {
    let odd = 0
 A.sort((a,b) => a-b)
   for(let i=0; i<A.length; i++) {
     if (A[i] === A[i +1]) {
       i++
     }else {
       odd = A[i]
     }
   }
    return odd
}


//Solution Ania 
const findOdd = A => {
    let sortedA = A.sort()
    console.log(sortedA)
    let result = 0
    for (let i = 0; i<A.length; i++){
      if ((sortedA.lastIndexOf(sortedA[i]) - sortedA.indexOf(sortedA[i]))%2 === 0) {
        result = sortedA[i]
      }
    }
    return result
  }