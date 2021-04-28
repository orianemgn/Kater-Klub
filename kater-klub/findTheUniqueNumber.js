//Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

//Solution Simon 
function findUniq(arr) {
    return arr.filter(number => 
                      arr.indexOf(number) === arr.lastIndexOf(number))[0] 
  }


  //Solution Florian 
  function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            return arr[i]
        }
    }
}

//Solution Ivan 
function findUniq(arr) {
    return Number(arr.filter((v,i,a) => a.indexOf(v) == a.lastIndexOf(v)))
  }