//Coding Meetup #14 - Higher-Order Functions Series - Order the food
//https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript

//My solution 
function orderFood(list) {
    let count = [];
    list.map(item => {
      if(item.meal === "vegetarian") count.push("vegetarian")
      else if (item.meal === "standard") count.push("standard")
      else if (item.meal === "vegan") count.push("vegan")
      else if (item.meal === "diabetic") count.push("diabetic")
      else if (item.meal === "gluten-intolerant") count.push("gluten-intolerant")
    })
    const result = count.reduce((json,val)=>({...json,[val]:(json[val] |0) +1}), {});
    return result
  }
  
//Adam solution 
// function orderFood(list) {
//     let meal = {}
//     const mealArray = [];
//    for(let object of list){
//      meal[object.meal] = 0
//      mealArray.push(object.meal)
//    }
//    const countMeals = mealArray.map((el) => {
//      if(el === ‘vegetarian’){
//        meal.vegetarian++
//      } else if(el === ‘standard’){
//         meal.standard++
//      } else if(el === ‘vegan’){
//        meal.vegan++
//      } else if( el === ‘diabetic’){
//        meal.diabetic++
//      } else if(el === ‘gluten-intolerant’){
//        meal[‘gluten-intolerant’]++
//      }
//    })
//     return meal
//   }

//Ivan solution 

function orderFood(list) {
    let meals = {
      'vegetarian': 0,
      'standard': 0,
      'vegan': 0,
      'diabetic': 0,
      'gluten-intolerant': 0
    }
    let filteredMeals = {}
    list.map(key => {
      key.meal === 'standard' && meals.standard++
      key.meal === 'vegetarian' && meals.vegetarian++
      key.meal === 'vegan' && meals.vegan++
      key.meal === 'diabetic' && meals.diabetic++
      key.meal === 'gluten-intolerant' && meals['gluten-intolerant']++
    })
    Object.keys(meals).forEach((m) => {
      if (meals[m]) { filteredMeals[m] = meals[m]; }
    });
    return filteredMeals;
  }

