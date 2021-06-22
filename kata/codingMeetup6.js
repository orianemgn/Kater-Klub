// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
// https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript


function isSameLanguage(list) {
    let arrayLanguage = []
    list.forEach(participant =>{
      console.log(participant.language)
      arrayLanguage.push(participant.language)
    })
    console.log(arrayLanguage)
    for(let i=0; i<arrayLanguage.length -1; i++){
      if(arrayLanguage[i] == undefined || arrayLanguage[i] !== arrayLanguage[i+1]){
        return false 
      } else return true
    }
  }


  //

  function isSameLanguage(list) {
    let arrayLanguage = []
    list.forEach(participant =>{
      console.log(participant.language)
      arrayLanguage.push(participant.language)
    })
    console.log(arrayLanguage)
    for(let i=0; i<arrayLanguage.length -1; i++){
      if(arrayLanguage[i] == undefined || arrayLanguage[i] !== arrayLanguage[i+1]){
        return false 
      } else return true
    }
  }