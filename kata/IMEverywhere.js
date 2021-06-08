//https://www.codewars.com/kata/6097a9f20d32c2000d0bdb98/train/javascript
function i(word) {
    if(word === "" || word === null) return "Invalid word";
    if(word[0] === "I" || word[0] !== word[0].toUpperCase()) return "Invalid word"
    let countVowels = word.toLowerCase().split('').filter(e => e.match(/[aeiou]/) != null).length;
    let countConsonants = word.toLowerCase().split('').filter(e => e.match(/[^aeiou]/) != null).length;
    if(countVowels >= countConsonants) return "Invalid word"
    else return "i"+word
  }

//improvement 
function i(word) {
    let countVowels = word.toLowerCase().split('').filter(e => e.match(/[aeiou]/) != null).length;
    let countConsonants = word.toLowerCase().split('').filter(e => e.match(/[^aeiou]/) != null).length;
   if(countVowels >= countConsonants || word === "" || word[0] === "I" || word[0] !== word[0].toUpperCase()) return "Invalid word"
    else return "i"+word
  }

//improvement
function i(word) {
    let countVowels = word.toLowerCase().split('').filter(e => e.match(/[aeiou]/) != null).length;
    let countConsonants = word.toLowerCase().split('').filter(e => e.match(/[^aeiou]/) != null).length;
   return countVowels >= countConsonants || word === "" || word[0] === "I" || word[0] !== word[0].toUpperCase() ? "Invalid word" : "i"+word;
  }

//improvement
function i(word) {
   return word.toLowerCase().split('').filter(e => e.match(/[aeiou]/) != null).length >= word.toLowerCase().split('').filter(e => e.match(/[^aeiou]/) != null).length || word === "" || word[0] === "I" || word[0] !== word[0].toUpperCase() ? "Invalid word" : "i"+word;
  }