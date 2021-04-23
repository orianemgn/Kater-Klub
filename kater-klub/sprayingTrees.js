//Spraying trees
// https://www.codewars.com/kata/5981a139f5471fd1b2000071/train/javascript

//My solution 
function task(w, n, c) {
    // your code
    let need = n*c; 
    switch (w){
      case 'Monday':
        return `It is Monday today, James, you have to work, you must spray ${n} trees and you need ${need} dollars to buy liquid`
        break;
      case 'Tuesday':
        return `It is Tuesday today, John, you have to work, you must spray ${n} trees and you need ${need} dollars to buy liquid`
        break;
        case 'Wednesday':
        return `It is Wednesday today, Robert, you have to work, you must spray ${n} trees and you need ${need} dollars to buy liquid`
        break;
        case 'Thursday':
        return `It is Thursday today, Michael, you have to work, you must spray ${n} trees and you need ${need} dollars to buy liquid`
        break;
        case 'Friday':
        return `It is Friday today, William, you have to work, you must spray ${n} trees and you need ${need} dollars to buy liquid`
        break;
    }
    
  }


  //solution 2 
  let task = (w,n,c) => {
    let workers = {'Monday':'James','Tuesday':'John','Wednesday':'Robert','Thursday':'Michael','Friday':'William'};
    return `It is ${w} today, ${workers[w]}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`;
  };


  //solution 3 
  function task(w, n, c) {
    // your code
    let names = ['James','John','Robert','Michael','William']
    let workerName = ''
    switch(w) {
        case 'Monday':
          workerName = names[0];
          break;
        case 'Tuesday':
          workerName = names[1];
          break;
        case 'Wednesday':
          workerName = names[2];
          break;
        case 'Thursday':
          workerName = names[3];
          break;
        case 'Friday':
          workerName = names[4];
          break;
    }
    return `It is ${w} today, ${workerName}, you have to work, you must spray ${n} trees and you need ${c * n} dollars to buy liquid`
  }


  //Solution Elvia 
  function task(w, n, c) {
    let name
    let money=c*n
    let workerShifts= {
      Monday: 'James',
      Tuesday: 'John',
      Wednesday: 'Robert',
      Thursday: 'Michael',
      Friday: 'William'
    }
    for (let day in workerShifts){
      if(w === day) name=workerShifts[day]
    }
    if(n === 1 && c === 1) return `It is ${w} today, ${name}, you have to work, you must spray ${n} tree and you need ${money} dollar to buy liquid`
   else return `It is ${w} today, ${name}, you have to work, you must spray ${n} trees and you need ${money} dollars to buy liquid`
  }

  //Solution florian
  const roster = {
    'Monday': 'James',
    'Tuesday': 'John',
    'Wednesday': 'Robert',
    'Thursday': 'Michael',
    'Friday': 'William'
}
function task(day, trees, cost) {
    const worker = roster[day]
    const totalCost = trees * cost
    return `It is ${day} today, ${worker}, you have to work, you must spray ${trees} trees and you need ${totalCost} dollars to buy liquid`
}

//Solution Simone 
function task(w, n, c) {
    let name;
     if(w === “Monday”) name = ‘James’;
      if(w === “Tuesday”) name = ‘John’;
     if(w === “Wednesday”) name = ‘Robert’;
     if(w === “Thursday”) name = ‘Michael’;
     if(w === “Friday”) name = ‘William’;
    return `It is ${w} today, ${name}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`;
  }

  //Solution Mafe 
  function task(w, n, c) {
    // your code
    let obj = {
      'Monday':'James',
      'Tuesday':'John',
      'Wednesday':'Robert',
      'Thursday':'Michael',
      'Friday':'William'
    }
    return `It is ${w} today, ${obj[w]}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`
  }