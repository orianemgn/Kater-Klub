//https://www.codewars.com/kata/577d0a117a3dbd36170001c2/javascript
// VaccineNation


function vaccineList(age, status, month) {
    // I create an object with the datas 
    let vaccine = {
      fiveInOne : ['8 weeks', '12 weeks', '16 weeks'],
      pneumococcal : ['8 weeks', '16 weeks'],
      rotavirus : ['8 weeks', '12 weeks'],
      meningitisB : ['8 weeks', '16 weeks', '12 months'],
      hibMenC : ['12 months'],
      measlesMumpsRubella : ['12 months', '40 months'],
      'offer fluVaccine' : ['september','october','november'],
      preSchoolBooster : ['40 months']
    }
    // I create an empty array to push the result 
      let result = []
      //I iterate inside my object
    for(let[key,value] of Object.entries(vaccine)){
        // I iterate inside the array values of the object 
      for(let i=0; i<value.length; i++){
          // if one of the value in the array is equal to the paramether then push the key in the result array
        if(age === (value[i]) || status === (value[i]) || month ===(value[i])){
          result.push(key)
        }
      }
    }


  // I delete the duplicates
    let uniqueResult = [...new Set(result)]; 
  // I sort the array 
    let sortedResult = uniqueResult.sort(); 
    
    return sortedResult
  }
  