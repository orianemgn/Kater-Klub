// Harvest Festival
// https://www.codewars.com/kata/606efc6a9409580033837dfb/train/javascript


//my solution 
function plant(seed, water, fert, temp){
    let plant = "";
   if(temp <20 || temp>30){
     let plant = ("-".repeat(water) + seed.repeat(fert)).repeat(water)
     let plantDie = plant.replace(/[^-]/g,'') + seed
     return plantDie 
     } else {
       let plant = ("-".repeat(water) + seed.repeat(fert)).repeat(water)
       return plant
     }
  }

  //Solution Simone 
  function plant(seed, water, fert, temp){
    //your code here
    let stem = ‘-’.repeat(water);
    let flower = seed.repeat(fert);
      if (temp < 20 || temp > 30) return stem.repeat(water) + seed;
      else return (stem + flower).repeat(water);
   }


   //Solution Florian 
   function plant(seed, water, fert, temp) {
    let plant = ('-'.repeat(water) + seed.repeat(fert)).repeat(water)
    if (temp >= 20 && temp <= 30) {
        return plant
    } else {
        return plant.split(seed).join('') + seed
    }
}



