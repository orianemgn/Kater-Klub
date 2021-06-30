// https://www.codewars.com/kata/5e5e8b84549a650011e843b0/javascript 
// The Fiscal Code

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };


function fiscalCode(person) {
  
  let surname = transformSurname(person.surname)
  console.log(surname)
  let name = transformName(person.name)
  console.log(name)
  let numbers = transformNumbers(person.gender, person.dob)
  console.log(numbers)
  
  return surname + name + numbers
  
}

function transformSurname(surname){
  let upper = surname.toUpperCase()
  let cons = upper.replace(/[AEIOU]/g, '')
  let vowels = upper.replace(/[^AEIOU]/g, '')
  let code = ''
  if(cons.length === 3){
    code = cons
  } if(cons.length < 3){
    code = (cons+vowels).substring(0,3)
  } if(cons.length > 3){
    code = cons.substring(0,3)
  } if(code.length < 3){
    code = (code +'XXX').substring(0,3)
  }
  return code
}

function transformName(name){
  let upper = name.toUpperCase()
  let cons = upper.replace(/[AEIOU]/g, '')
  let vowels = upper.replace(/[^AEIOU]/g, '')
  let code = ''
  if(cons.length === 3){
    code = cons
  } if(cons.length < 3){
    code = (cons+vowels).substring(0,3)
  } if(cons.length > 3){
    code = cons[0] + cons[2] + cons[3]
  } if(code.length < 3){
    code = (code +'XXX').substring(0,3)
  }
  return code
}

function transformNumbers(gender, dob){
  let dobArray = dob.split('/')
  let dayOfbirth = dobArray[0]
  let year = dobArray[2]
  let lastYearDigits = year.slice(-2)
  let month = dobArray[1]
  let letter = ''
  for(const [key,value] of Object.entries(months)){
    if(key === month){
      letter = value
    }
  }
 // console.log(lastYearDigits + letter)
 // console.log(gender)
  let lastPart = ''
  if(gender === 'M'){
    //console.log(dayOfbirth)
    if(dayOfbirth < 10){
      lastPart = "0" + dayOfbirth
    } else {
      lastPart = dayOfbirth
    }
  } if (gender === 'F'){
    lastPart = (parseInt(dayOfbirth) + 40).toString()
  }
  return lastYearDigits + letter + lastPart
}





//fiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }) //"CHEBND61T01"
fiscalCode({ name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899" }) //CPNLAX99A17