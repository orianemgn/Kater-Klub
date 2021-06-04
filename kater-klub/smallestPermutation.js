// https://www.codewars.com/kata/5fefee21b64cc2000dbfa875/train/javascript
// Smallest Permutation



//Problem with the Zero 

function minPermutation(n) {
    let array = n.toString().split('')
    //console.log(array)
    //console.log(parseInt('0'))
    //  const withoutZero = array.filter((number) => parseInt(number) > 0)
    // console.log(withoutZero)
    let sort = array.sort()
    console.log(sort)
    for (let i =0; i< sort.length; i++){
      console.log(sort[i])
      if(sort[i] === '0'){
        sort.splice(i,1).push('0')
        sort.push('0')
      }
    } return Number(sort.join(''))
    
  }



  function minPermutation(n) {
    let array = n.toString().split('')
    let sort = array.sort()
    for (let i =0; i< sort.length; i++){
      if(sort[i] === '0'){
        sort.splice(i,1)
        if (sort.includes('-')){
          sort.splice(2,0,'0')
        } else {
          sort.splice(1,0,'0')
        }
      }
    } return Number(sort.join(''))
  }