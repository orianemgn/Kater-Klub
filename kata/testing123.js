//Testing 1-2-3
//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/javascript

var number=function(array){
    //your awesome code here
    let result = []
    for(let i=0; i<array.length; i++){
      result.push(i+1 + ": " + array[i])
    }
    return result
  }