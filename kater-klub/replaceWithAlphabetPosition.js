//Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

//My solution 
function alphabetPosition(text) {
    let cleanText = (text.replace(/[^a-z]/gi, '')).toLowerCase()
    console.log(cleanText)
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let position = cleanText.split('').map(x=> alphabet.indexOf(x)+1);
    return position.join(' ')
    }

//Solution Adam
function alphabetPosition(text) {
    text = text.toLowerCase();
    const textToArray = text.split("")
   let onlyLettersArray = textToArray.filter(char => /[a-zA-Z]/.test(char))
    const lettersToNums = onlyLettersArray.map((el) => {
     return parseInt(el,36) - 9
    })
    return lettersToNums.join(" ")
  }

//Solution Florian
const alphabetConversionTable = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
}

function alphabetPosition(text) {
    let numText = []
    text.toLowerCase().split('').forEach(char => {
        if (char in alphabetConversionTable) {
            numText.push(alphabetConversionTable[char])
        }
    })
    return numText.join(' ').trim();
}

//Solution Ivan 
function alphabetPosition(text) {
    let char = text.toLowerCase().replace(/[^a-z]/g,"");
    return [...char].map(x => x.charCodeAt() - 96).toString().replace(/,/g, " ")
  }


//Solution Simone 
function alphabetPosition(text) {
    let alphabet = [‘a’,‘b’,‘c’,‘d’,‘e’,‘f’,‘g’,‘h’,‘i’,‘j’,‘k’,‘l’,‘m’,‘n’,‘o’,‘p’,‘q’,‘r’,‘s’,‘t’,‘u’,‘v’,‘w’,‘x’,‘y’,‘z’];
    return text.toLowerCase().replace(/[^a-z]/g,‘’).split(‘’).map(x => alphabet.indexOf(x)+1).join(' ’);
    }