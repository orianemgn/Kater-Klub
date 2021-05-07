// The Supermarket Queue
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

//My solution (wrong logic - because doesn't pass all the test') - still have ton find another one
function queueTime(customers, n) {
    if (customers.length === 0){
      return 0
    }
   let sumCustomers = customers.reduce((a,b) => a+b)
   let totalQueueTime = 0;
   if(customers.length >= n){
    totalQueueTime = Math.round(sumCustomers / n)
   } else {
    totalQueueTime = Math.round(Math.max(...customers))
   }
   return totalQueueTime
  }