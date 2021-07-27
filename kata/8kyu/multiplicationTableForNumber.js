//https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript
//Multiplication table for number 

function multiTable(number) {
    let array = []
    for(let i=1; i<=10; i++){
      console.log(i*number)
      array.push(`${i} * ${number} = ${i*number}`)
    }
    return array.join("\n")
  }