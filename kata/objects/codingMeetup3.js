//https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript
// https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript

function isRubyComing(list) {
    countRubyDevelopers = 0
    for (const[key,value] of Object.entries(list)){
      if (value.language === 'Ruby'){
          countRubyDevelopers ++
          }
    }
    return countRubyDevelopers >= 1? true : false
  }


  // or 

  function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
  }