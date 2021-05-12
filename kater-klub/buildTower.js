//Build Tower
//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript

//My solution 
function towerBuilder(nFloors) {
    let tower = []
    for(let i=1; i<=nFloors; i++){
      tower.push(" ".repeat(nFloors -i) + "*".repeat((2*i) -1) + " ".repeat(nFloors -i) )
    }
    return tower
  }


//Adam solution 
function towerBuilder(nFloors) {
    const tower = [];
    for(let i = 1; i < nFloors;i++){
       tower.push("*".repeat(i+i+1))
    }
     tower.unshift("*")
    return tower
  }

//Simone solution 
function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++){
      tower[i] = " ".repeat(nFloors-i-1) + "*".repeat(i*2+1) + " ".repeat(nFloors-i-1)
    }
    return tower
  }