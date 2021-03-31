// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//Solution 1
function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length
  }

//Solution 2
function getCount(str) {
    let vowelsCount = 0;
    const vowels = 'aeiou'
  
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelsCount ++
      }
    }
    return vowelsCount;
}

//solution 3
function getCount(str) {
    return str.split(/[aeiou]/).length - 1
  }