//Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

//soltion 1
const spinWords = sentence => sentence.split(/\s+/).map(
    word => word.length >= 5 ? word.split('').reverse().join('') : word
  ).join(' ')

//solution 2
  function spinWords(backward) {

    var sentence = "";
    var separate = backward.split(" ");
    
    for (var i = 0; i < separate.length; i++) {
      if (sentence) sentence += ' ';
      if (separate[i].length >= 5) {
        sentence += separate[i].split("").reverse().join("");
      } else {
        sentence += separate[i];
      }
    }
    return sentence;
  }
  
  //solution Simone 
  function spinWords(str){
    return str
           .split(" ")
           .map(word => (word.length >= 5 ? [...word].reverse().join("") : word))
           .join(" ")
   };


   //solution Florian 
   function spinWords(string) {
  
    let fiveOrMoreReversed = string.split(' ').map(word => {
      if (word.length >= 5) {
        return word.split('').reverse().join('')
      }
      return word
    }).join(' ')
  
    return fiveOrMoreReversed
  }


  //solution with replace 
  function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
  }