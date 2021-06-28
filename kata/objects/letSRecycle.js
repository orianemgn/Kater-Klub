// Let's Recycle!
//https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

function recycle(array) {
    // create 4 variable for the different reclycle bins 
    let paper = []
    let glass = []
    let organic = []
    let plastic = []
    //iteratin in the list of object and check material and second material and push the type in the corresponding bin
    array.forEach(obj =>{
      if(obj.material === "paper" || obj.secondMaterial === "paper" ){
        paper.push(obj.type)
      } if(obj.material === "glass" || obj.secondMaterial === "glass"){
        glass.push(obj.type)
      } if(obj.material === "organic" || obj.secondMaterial === "organic"){
        organic.push(obj.type)
      } if(obj.material === "plastic" || obj.secondMaterial === "plastic"){
        plastic.push(obj.type)
      } 
      
    })
    // push all the array bin in an array reclycleBins 
    let recycleBins = []
    recycleBins.push(paper, glass, organic, plastic)
    return recycleBins
  }