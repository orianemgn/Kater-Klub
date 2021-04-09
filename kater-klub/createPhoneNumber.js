//Create Phone Number
//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

//Mine Solution
function createPhoneNumber(numbers){
  
    let insert = numbers.splice(0,0,'(') + numbers.splice(4,0,') ') + numbers.splice(8,0,'-')
    return numbers.join('')
  }

//Solution Adam
function createPhoneNumber(numbers){
    numbers.splice(3,0,')')
  numbers.splice(7,0,'-')
  numbers.unshift('(')
  numbers.splice(5,0,' ')
  return numbers.join('')
  }


//Solution Florian
function createPhoneNumber(numbers) {
    let block1 = numbers.splice(0, 3).join('')
    let block2 = numbers.splice(0, 3).join('')
    let block3 = numbers.splice(0, 4).join('')
    return (`(${block1}) ${block2}-${block3}`)
  }

//Solution Simon 
function createPhoneNumber(numbers){
    let firstThree = numbers.slice(0,3).join('')
    let secondThree = numbers.slice(3,6).join('')
    let finalFour = numbers.slice(6,10).join('')
    return `(${firstThree}) ${secondThree}-${finalFour}`
  }

//Solution Simone 
// function createPhoneNumber(numbers){
//     numbers = numbers.join(``);
//     return `(` + numbers.substring(0,3) + `)`+' `+ numbers.substring(3, 6) + `-` + numbers.substring(6);
//   }

//nice one :
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

  //nice one 
  function createPhoneNumber(numbers){
    return '(' + numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9];
  }


