//Sort the odd
//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
    // create a sorted array of odd numbers
    let odd = array.filter(number => number %2 !==0).sort((a,b)=> a-b)
    console.log(odd)
    let i=0;
    let sortedArray = [];
    //iterate over the array
    array.forEach(number => {
      // if number is even push in the new array
      if(number%2 === 0){
        sortedArray.push(number)
        console.log('coucou',sortedArray)
      } else {
        //if the number is odd push odd at the good position
        console.log('hola',odd[i])
        sortedArray.push(odd[i]);
        i++
      }
    });
    return sortedArray
  }


  //solution Ivan 
  function sortArray(array) {
    let indices = []
    array
      .filter((x, i)=> x % 2 && indices.push(i))
      .sort((a, b) => a - b )
      .forEach((x, i) => array[indices[i]] = x)
   return array
  }