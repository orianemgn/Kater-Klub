// Evens times last
// https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript


function evenLast(numbers) {
    let sum = 0; 
     for (let i = 0; i < numbers.length; i += 2) sum += numbers[i];
   
       if (numbers.length >=1) return sum * numbers[numbers.length - 1]
       else return 0
   }