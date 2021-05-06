//Meeting 
//https://www.codewars.com/kata/59df2f8f08c6cec835000012/javascript

function meeting(s) {
    let arrayS = (s.toUpperCase()).split(';')
    let reverseWord = []
    for (let i=0; i<arrayS.length; i++){
      reverseWord.push(((arrayS[i].split(':').reverse())).join(', '))
      
    } 
  let sortedArray = reverseWord.sort()
  console.log(sortedArray)
  sortedArray.forEach(function(el,index){
    sortedArray[index] = '(' + el + ')';
  }); 
  return sortedArray.join('')
}