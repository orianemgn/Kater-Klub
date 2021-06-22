// Over The Road
// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript



function overTheRoad(address, n){
    var sum = n * 2 + 1;
    var opposite = sum - address;
    return opposite;
  }


// or 


let hodd = (r,n) => 1 + (r-1)*2; // house odd.
let heven = (r,n) => 2*n - (r-1)*2; // house even.
let rodd = (h,n) => (h+1)/2; // row for odd house.
let reven = (h,n) => (2*n+2-h)/2; //row for even house.

let overTheRoad = (h, n) => {
  //console.log("Start",h,n);
  if(0 == n%2){
    var r = reven(h,n);
    var ans = hodd(r,n);
    //console.log(`Even house ${h} and row us ${r}, next house is ${ans}.`);
    return ans;
  }
  var r = rodd(h,n);
  var ans = heven(r,n);
  //console.log(`Odd house ${h} and row us ${r}, next house is ${ans}.`);
  return ans;
}







// function overTheRoad(address, n){
//     //code here
//     let houseOddNumber = []
//     let houseEvenNumber = []
//     for(let i=1; i<=n*2; i++){
//       if(i%2!==0){
//         houseOddNumber.push(i)
//       } else {
//         houseEvenNumber.push(i)
//       }
//     }
//     let sortedHouseOddNumber = houseOddNumber.sort(function(a,b){
//       return b-a
//     });
//     let opposites = {};
//     sortedHouseOddNumber.forEach(function(value,index){
//       opposites[value] = houseEvenNumber[index]
//     });
//     let result = 0; 
//     for(let[key,value] of Object.entries(opposites)){
//       if(address === Number(key)) result = value
//       if(address === value) result = Number(key)
//     }
//     return result
//   }