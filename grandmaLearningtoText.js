// Grandma learning to text (done in group)
// Write a function that replaces 'two', 
// 'too' and 'to' with the number '2'. Even if the sound is found mid 
// word (like in octopus) or not in lowercase grandma still thinks that 
// should be replaced with a 2. Bless her.

function textin(str){
    //remplace the word 'two', 'too' or 'to' by 2
    return str.replace(/two/gi,"2").replace(/too/gi,"2").replace(/to/gi,"2");
    // return str.replace(/too|to|two/gi,"2")
   }