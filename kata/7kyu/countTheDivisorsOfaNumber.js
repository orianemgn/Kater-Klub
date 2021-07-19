//https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
//Count the divisors of a number


function getDivisorsCnt(n){
    let divisors = []
    for (let i=1 ; i<=n; i++){
      if(n%i === 0){
        divisors.push(i)
      }
    } return divisors.length
  }