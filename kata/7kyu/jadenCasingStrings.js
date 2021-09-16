//Jaden Casing Strings
//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

String.prototype.toJadenCase = function () {
    //...
    let array = this.split(' ')
    let arrayUppercase = []
    for(let i=0; i<array.length; i++){
      arrayUppercase.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
    }
    return arrayUppercase.join(' ')
  };