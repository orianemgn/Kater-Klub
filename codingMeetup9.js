// Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
// https://www.codewars.com/kata/5829ca646d02cd1a65000284/train/javascript

function isAgeDiverse(list) {
    // thank you for checking out the Coding Meetup kata :)
    console.log(list)
    let ageGroups = {
      teens: 0, 
      twenties: 0, 
      thirties: 0, 
      forties: 0, 
      fifties: 0, 
      sixties: 0, 
      seventies: 0, 
      eighties: 0, 
      nineties: 0, 
      centenarian: 0
    }
    
    list.forEach(dev => {
      if(dev.age >= 10 && dev.age < 20){
        ageGroups.teens +=1
      } if(dev.age >= 20 && dev.age < 30){
        ageGroups.twenties +=1
      } if(dev.age >= 30 && dev.age < 40){
        ageGroups.thirties +=1
      } if(dev.age >= 40 && dev.age < 50){
        ageGroups.forties +=1
      } if(dev.age >= 50 && dev.age < 60){
        ageGroups.fifties +=1
      } if(dev.age >= 60 && dev.age < 70){
        ageGroups.sixties +=1
      } if(dev.age >= 70 && dev.age < 80){
        ageGroups.seventies +=1
      } if(dev.age >= 80 && dev.age < 90){
        ageGroups.eighties +=1
      } if(dev.age >= 90 && dev.age < 100){
        ageGroups.nineties +=1
      } if(dev.age >= 100 && dev.age < 199){
        ageGroups.centenarian +=1
      } 
    })
    console.log(ageGroups)
    let count = 0
    console.log(Object.values(ageGroups))
    for(let age of Object.values(ageGroups)){
      if(age >= 1){ count ++}
    }
    return count >= 10? true : false
  }
  
  
  var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
  ];
  
  const list3 = [
        { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
        { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
        { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
        { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
      ];
  
  isAgeDiverse(list1)
  isAgeDiverse(list3)




  // Interresting Solution : 
  function isAgeDiverse(list) {
    const ageList = list.map(x => x.age)
    if(
      ageList.some(x =>(x>=0&&x<20)) &&
      ageList.some(x =>(x>=20&&x<30)) &&
      ageList.some(x =>(x>=30&&x<40)) &&
      ageList.some(x =>(x>=40&&x<50)) &&
      ageList.some(x =>(x>=50&&x<60)) &&
      ageList.some(x =>(x>=60&&x<70)) &&
      ageList.some(x =>(x>=70&&x<80)) &&
      ageList.some(x =>(x>=80&&x<90)) &&
      ageList.some(x =>(x>=90&&x<100)) &&
      ageList.some(x =>(x>=100&&x<200))
    ){
      return true
    } else {
      return false
    }
  }
