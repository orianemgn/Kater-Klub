//https://www.codewars.com/kata/577d0a117a3dbd36170001c2/javascript
// VaccineNation


function vaccineList(age, status, month) {
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
      let result = []
    for(let[key,value] of Object.entries(vaccine)){
      for(let i=0; i<value.length; i++){
        if(age === (value[i]) || status === (value[i]) || month ===(value[i])){
          result.push(key)
        }
      }
    }
  
    let uniqueResult = [...new Set(result)]; 
    let sortedResult = uniqueResult.sort(); 
    
    return sortedResult
  }
  