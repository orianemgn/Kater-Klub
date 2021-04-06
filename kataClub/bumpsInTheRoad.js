//Bumps in the Road
// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

//My solution 

function bump(x){
    let count = 0; 
  for (let i=0; i<x.length; i++){
    if (x[i] === 'n'){
      count ++
    }
  } return count > 15 ? "Car Dead" : "Woohoo!"
  }

//Solution Ivan
function bump(x){
    let bumpNum = ''
    for(let i = 0; i < x.length; i++) x[i] === 'n' && bumpNum++
    return bumpNum > 15 ? "Car Dead" : "Woohoo!"
  }

//Solution Florian 
const bump = road => road.split('').filter(char => char === 'n').length <= 15 ? "Woohoo!" : "Car Dead"

//Solution Mafe
function bump(x) {
    let bumpsCount = x.split("n").length - 1
    // console.log(bumpsCount)
    if (bumpsCount <= 15) {
      return "Woohoo!"
    } else {
      return "Car Dead"
    }
  }

  //Shorter solution 
  const bump = x => x.split('n').length < 17 ? 'Woohoo!' : 'Car Dead';
  // Or
  function bump(x){
    return x.replace(/_/g,'').length>15 ? 'Car Dead' : 'Woohoo!'
  }