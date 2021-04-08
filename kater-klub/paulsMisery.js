//Paul's Misery
//https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript

function paul(x){
    let totalScore = 0;
    for(let i = 0; i < x.length;i++){
      switch(x[i]){
        case `kata`:
          totalScore+=5;
          break;
        case `Petes kata`:
          totalScore+=10;
          break;
        case `life`:
          totalScore+=0;
          break;
        case  `eating`:
          totalScore++;
          break;
      }
    }
   if(totalScore < 40){
     return `Super happy!`
   } else if(totalScore < 70){
     return `Happy!`
   } else if(totalScore < 100){
     return `Sad!`
   } else if(totalScore > 100){
     return `Miserable!`
   }
  }


  //or 

  function paul(x){
    let count = 0
    x.forEach(el => {
      if(el == 'Petes kata') count += 10
      if(el == 'eating') count++
      if(el == 'kata') count += 5
      if(el == 'life') count
    })
    if(count < 40) return `Super happy!`
    if(count >= 40 && count < 70) return `Happy!`
    if(count >= 70 && count < 100) return `Sad!`
    if(count >= 100) return `Miserable!`
  }