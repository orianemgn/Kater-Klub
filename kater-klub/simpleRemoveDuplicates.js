//Simple remove duplicates
//https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

function solve(arr){
    arr.reverse()
    let unique =[]
    for(let i=0; i<arr.length; i++){
      if(arr.filter(num => num === arr[i]).length >= 1){
        if(unique.includes(arr[i])===false){
          unique.push(arr[arr.lastIndexOf(arr[i])])
        }
      }
    }
    return unique.reverse()
    }