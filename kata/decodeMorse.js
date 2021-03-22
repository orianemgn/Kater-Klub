//Decode the Morse code
// In this kata you have to write a simple Morse code decoder. 
// While the Morse code is now mostly superseded by voice and digital data 
// communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". 
// For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded
//  as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. 
//  When the message is written in Morse code, a single space is used to separate the 
//  character codes and 3 spaces are used to separate words. For example, the message
//   HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.
// NOTE: Extra spaces before or after the code have no meaning and should be ignored.
// In addition to letters, digits and some punctuation, there are some special service codes, 
// the most notorious of those is the international distress signal SOS 
// (that was first issued by Titanic), that is coded as ···−−−···. 
// These special codes are treated as single special characters, and usually are transmitted 
// as separate words.
// Your task is to implement a function that would take the morse code as input and 
// return a decoded human-readable string.

decodeMorse = function(morseCode){
    console.log(morseCode)
     const wordsArr = morseCode.split('   ')
    for(let i = 0; i < wordsArr.length; i++) {
      wordsArr[i] = wordsArr[i].split(' ')
    }
    for(let i = 0; i < wordsArr.length; i++) {
      for(let j = 0; j < wordsArr[i].length; j++) {
        wordsArr[i][j] = MORSE_CODE[wordsArr[i][j]]
      }
    }
    for(let i = 0; i < wordsArr.length; i++) {
      wordsArr[i] = wordsArr[i].join('')
    }
    return wordsArr.join(' ').trim()
  }





// decodeMorse = function(morseCode){
//     // Get the morse alphabet
//       const morseDictionary = { 
//       '.-':     'A',
//       '-...':   'B',
//       '-.-.':   'C',
//       '-..':    'D',
//       '.':      'E',
//       '..-.':   'F',
//       '--.':    'G',
//       '....':   'H',
//       '..':     'I',
//       '.---':   'J',
//       '-.-':    'K',
//       '.-..':   'L',
//       '--':     'M',
//       '-.':     'N',
//       '---':    'O',
//       '.--.':   'P',
//       '--.-':   'Q',
//       '.-.':    'R',
//       '...':    'S',
//       '-':      'T',
//       '..-':    'U',
//       '...-':   'V',
//       '.--':    'W',
//       '-..-':   'X',
//       '-.--':   'Y',
//       '--..':   'Z',
//       '.----':  '1',
//       '..---':  '2',
//       '...--':  '3',
//       '....-':  '4',
//       '.....':  '5',
//       '-....':  '6',
//       '--...':  '7',
//       '---..':  '8',
//       '----.':  '9',
//       '-----':  '0',
//     };
//     // clean extra spaces
//     let cleanExtraSpaces = morseCode.trim()
//     //transform string in array
//     let array = cleanExtraSpaces.split(' ');
    
    
//     let outPut = ''
//     array.forEach(morse => {
//       if (morse === ""){
//         outPut += " "
//       } else {
//         if (morseDictionary[morse]){
//           outPut += morseDictionary[morse]
//         }
//       }
//     }); 
//     //return outPut.toUpperCase();
//     return (outPut.split("  ").join(" "))
//     //return outPut.split(' ')
//   }


//   decodeMorse('.... . -.--   .--- ..- -.. .')
//   // 'HEY JUDE'