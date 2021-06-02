// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
// Credit Card Mask


function maskify(cc) {
    let masked = '';
    let lastFour = cc.substr(-4); 
    
      for(let i=0; i < cc.length -4; i++){
        masked += '#'
      } return masked + lastFour
    }



// or 
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }


// or 
// I reapet '#' the number of number in the string - the 4 last number and the I add the last 4 numbers 
function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
  }