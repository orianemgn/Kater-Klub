// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/javascript

const flip=(d, a)=>{
    //TODO
    d == 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)
    return a
  }


  // or 
  const flip=(d, a)=>{
    if(d === 'R') return a.sort((a,b)=>a-b);
    if(d === 'L') return a.sort((a,b)=>b-a);
  }

  // or 

  const flip=(d, a)=>{
    if (d=="R")
      a.sort((b,c)=>b-c);
    else
      a.sort((b,c)=>c-b);
    return a;
  }