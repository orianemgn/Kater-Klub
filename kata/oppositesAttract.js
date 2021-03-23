// Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, 
// they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of 
// petals it means they are in love.
// Write a function that will take the number of petals of 
// each flower and return true if they are in love and false if they aren't.

//solution 1
function lovefunc(flower1, flower2){
    // check if flower are odd or even
    // if one flower even and one flower odd = true
    // if both even or add = false
    if ( flower1 % 2 === 0 && flower2 % 2 === 1){
      return true
    } else if (flower1 % 2 === 1 && flower2 % 2 === 0){
      return true
    } else {
      return false
    }
  }

//solution 2
  function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 !==0;
  }