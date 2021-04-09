//Billiards pyramid
//https://www.codewars.com/kata/5bb3e299484fcd5dbb002912


function pyramid(balls) {
    let level = 0;
    while(balls > level) {
      level++;
      balls -= level;
    }
    return level;
  }


  //solution 2 
  function pyramid(balls) {
    let count = 0;
   let ballsPerRow = 0;
   
   for(let x=0; x<balls; x++) {
      // count per row    
     count++;// count = 1
     
     // count balls per row
     ballsPerRow = ballsPerRow + count;
     
     // is balls per row is equal to input
     if(ballsPerRow == balls) {
       // if true return count per row
       return count;
       //return 1
     };
     // is input less than balls per row
     if(balls < ballsPerRow) {
       // if true return count per row then minus one
       return count - 1;
       //return 0
     }
   }
  }


  //solution 3 
  function pyramid(balls) {
    //  need function to measure out the number for each line
    // 1, 3, 6, 10, 15, it's basically similar to a ! where you can add one every time instead of multiply
    //so i wanted to do this recursively but i can't remember how so we'll do this instead
    
    let level = 0;
    let ballCount = 0;
    
    while(ballCount < balls) {
      level++;
      ballCount += level;
    }
    
    //raises level to one higher than the highest possible for the given ball count,
    //then the while loop breaks. so we have to subtract one at the end
    //unless the ball count is equal to the level, then it doesn't need to be subtracted.
    
    if(ballCount===balls) return level;
    
    return level-1;
  }