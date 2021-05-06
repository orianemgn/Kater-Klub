//Turn String Input into Hash
//https://www.codewars.com/kata/52180ce6f626d55cf8000071

//Solution Ivan 
function strToHash(str){
    if(str === "") return {}
    let obj = {}
    let arr = str.replace(/[=]/g,":").split(',')
    for(let i = 0; i < arr.length; i++){
      let split = arr[i].split(':')
      obj[split[0].trim()] = Number(split[1])
    }
    return obj
  }

//Solution Florian 
function strToHash(str) {
    let hash = {}
    let arr = str.replace(/, |=/g, ' ').split(' ')
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = parseInt(arr[i + 1])
        i++
    }
    return str.length === 0 ? {} : hash
}


//My solution 
function strToHash(str){
    // ...
  newString = str.replace(/\=/gi, ':');
  console.log(newString)
  let array = newString.split(', ')
  console.log(array)
  let obj = {}
  array.forEach(function(el){
    let tup = el.split(':');
    obj[tup[0]]=Number(tup[1]);
  });
    return obj
  }


//Solution Simone 
// function strToHash(str) {
//     const result = new Object();
//     if (str) {
//       str.split(‘, ‘).forEach(pair => {
//         const keyValue = pair.split(‘=’);
//         return result[keyValue[0]] = Number(keyValue[1]);
//       });
//     }
//     return result;
//   }