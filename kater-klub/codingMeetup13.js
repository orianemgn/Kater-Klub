//Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
//https://www.codewars.com/kata/58381907f8ac48ae070000de

// My solution 


function isLanguageDiverse(list) {
    let countLanguages = {
      javaScript : 0,
      python: 0,
      ruby: 0,
    }

    list.forEach(participant => {
      if(participant.language === 'JavaScript'){
       countLanguages.javaScript ++
      } if(participant.language === 'Python'){
       countLanguages.python ++
      } if(participant.language === 'Ruby'){
       countLanguages.ruby ++
      }
    }); 

    let arrayLanguages = Object.values(countLanguages)
    let maxLanguage = Math.max(...arrayLanguages);
    let minLanguage = Math.min(...arrayLanguages)
    
    return maxLanguage > 2*minLanguage ? false : true
  }



  //Simon G solution
  function isLanguageDiverse(list) {
    let languagesObject = {}
    list.forEach(participant => {
      if (!languagesObject[participant.language]) {
        languagesObject[participant.language] = 1
      } else {
        languagesObject[participant.language] += 1
      }
    })
    const lowestFrequency = Math.min(...Object.values(languagesObject))
    const highestFrequency = Math.max(...Object.values(languagesObject))
   if (highestFrequency > (lowestFrequency*2)){
     return false
   } else {
     return true
   }
  }