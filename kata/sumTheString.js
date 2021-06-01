//Sum The Strings
//https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

function sumStr(a,b) {
    if(a === "" ) 
      a=0;
    
    if( b=="") 
      b=0
     
    let c = parseInt(a) + parseInt(b)
    return c.toString();
    
  }


  // or 

  function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }

  // or 

  function sumStr(a, b) {
    return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
  }