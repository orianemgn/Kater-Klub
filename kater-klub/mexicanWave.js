//Mexican Wave 
//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

const wave = (str) => {
    return str
      .split('')
      .map((char, index) =>
        str.substr(0, index) + char.toUpperCase() + str.substr(index + 1))
  }