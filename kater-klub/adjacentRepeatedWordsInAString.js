//Adjacent repeated words in a string
// https://www.codewars.com/kata/5245a9138ca049e9a10007b8/train/javascript

//My solution not completly working for now 
function countAdjacentPairs(searchString) {
    //convert the string in lower case and array
    let string = (searchString.toLowerCase()).split(' ');
    //build object to count word frequency
    let wordCount = {}; 
    string.forEach(function(w){
      if(!wordCount[w]){
        wordCount[w] = 0;
      }
      wordCount[w] += 1; 
    }); 
    let count = 0;
    console.log(wordCount) 
    for (let property in wordCount){
      if (wordCount[property] >= 2 ){
        count ++
      }
    } return count 
  }