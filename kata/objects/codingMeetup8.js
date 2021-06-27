// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
// https://www.codewars.com/kata/58291fea7ff3f640980000f9 



function allContinents(list) {
    // create an object to count how many time appear each continent 
    let countContinent = {
      Africa: 0,
      Americas: 0, 
      Asia: 0, 
      Europe: 0,
      Oceania: 0
    }

    // iterate through the list to count 
    list.forEach(dev => {
      switch(dev.continent){
        case 'Africa':
          countContinent.Africa ++
          break;
        case 'Americas':
          countContinent.Americas ++
          break; 
        case 'Asia':
          countContinent.Asia ++
          break; 
        case 'Europe':
          countContinent.Europe ++
          break; 
        case 'Oceania':
          countContinent.Oceania ++
          break; 
      }
    })
    // check if each count have a value > 1 
    let count = 0;
    for(let value of Object.values(countContinent)){
      if(value >=1) count ++
    }
    // if each continent is there the count should be highter than 5, then return true, if not false 
    return count >=5 ? true: false
  }



  // or 

  function allContinents(list) {
    // map in the list to get an array of the continents represented 
    let continentList = list.map(dev => dev.continent)
    // check if the array containt each continent 
    if(continentList.some(x => x === 'Africa') 
       && continentList.some(x => x === 'Americas') 
       && continentList.some(x => x === 'Asia') 
       && continentList.some(x => x === 'Europe') 
       && continentList.some(x => x === 'Oceania')){
      return true
    } else {
      return false
    }  
 }

 // or 
 function allContinents(list) {
    const continents = list.map(x => x.continent)
    return continents.includes('Africa' && 'Americas' && 'Asia' && 'Europe' && 'Oceania')
  }
 