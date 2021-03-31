// This time no story, no theory. 
// The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//My solution
function accum(s) {
  // transfor in array and loop 
  // get the character + first index of the character lower case +1 
  // print index*character 
  // add - between each + transform in string again
  let string = s.toLowerCase();
  let array = string.split('');
  console.log(array)
  let indexArray= [];
  for (let i=0; i< array.length; i++){
    indexArray.push(array[i].toUpperCase() + array[i].repeat(i))
  } 
  return indexArray.join('-')
  
}

//Solution Adam
function accum(s) {
	// your code
  s = s.toUpperCase();
  const newString2 = []
  
  for(let i = 0; i < s.length; i++){
  newString2.push(s[i].repeat(i+1))
  }
  
  const addSeperator = newString2.map(el => el + '-').join('').split('')

  return addSeperator.splice(0,addSeperator.length-1).join('')
  
}

//Solution Simon
function accum (s) {
  return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}

//Solution Florian 
function accum(str) {
    return str.split('').map((char, index) => {
      const repeatChar = (char.repeat(index + 1) + '-').toLowerCase()
      return repeatChar[0].toUpperCase() + repeatChar.substring(1)
    }).join('').slice(0, -1)
  }

//Solution Simone 
function accum(s) {
	// your code
  const arr = [];
  for (i = 0; i < s.length; i++) {
    arr.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
  }
  return arr.join("-");
}

//Michael R
let index = 0;
let indexArray= [];
for (let i=0; i<s.length; i++){
  index++
  indexArray.push(index)
} 