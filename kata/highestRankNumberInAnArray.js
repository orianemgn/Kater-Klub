// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
// Highest Rank Number in an Array


function highestRank(arr){
  let countFrequencie = {};
  for(let i =0; i<arr.length; i++){
    if(countFrequencie[arr[i]]){
      countFrequencie[arr[i]] = countFrequencie[arr[i]] + 1
    } else {
      countFrequencie[arr[i]] = 1
    }
  }
let maxValue = Math.max(...Object.values(countFrequencie))
let mostFrequent = []
for(const[key, value] of Object.entries(countFrequencie)){
  console.log(key,value)
  if(value === maxValue){
    mostFrequent.push(Number(key))
  }
}
  return Math.max(...mostFrequent)
}