//Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
// https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript 

function getFirstPython(list) {
    // Thank you for checking out my kata :)
    //iterate in the object
    // if object includes 'Python' return first name 
    // if not return other sentence
    let pythonDeveloperName = []; 
    let pythonDeveloperCountry = [];
    for(const[key,value] of Object.entries(list)){
      console.log(value.language, )
      if(value.language === 'Python'){
        pythonDeveloperName.push(value.firstName)
        pythonDeveloperCountry.push(value.country)
      }
    }
    return pythonDeveloperName.length === 0 ? 'There will be no Python developers': `${pythonDeveloperName[0]}, ${pythonDeveloperCountry[0]}`
  }


  //or just

  function getFirstPython(list) {
    for (var i=0; i<list.length; ++i)
      if (list[i].language=='Python')
        return list[i].firstName+', '+list[i].country;
    return 'There will be no Python developers';
  }