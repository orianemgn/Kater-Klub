//Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

//My solution 
function DNAStrand(dna){
    //your code here
    let dnaArray = dna.split('')
    // console.log(dnaArray)
    let complementaryArray = []
    for(let i=0; i<dna.length; i++){
      // console.log(dna[i])
      switch(dna[i]){
        case "A":
          complementaryArray.push('T');
          break;
        case "T":
          complementaryArray.push('A');
          break;
        case "C":
          complementaryArray.push('G');
          break;
        case "G":
          complementaryArray.push('C');
          break;
        default:
          complementaryArray.push(dna[i]); 
      }
    }
    return complementaryArray.join("")
  }


  //Adam solution 
  function DNAStrand(dna){
    const result = [];
    for(let chemical of dna){
      switch(chemical){
        case 'A':
          result.push('T');
          break;
        case 'T':
          result.push('A')
          break;
        case 'G':
          result.push('C')
          break;
        case 'C':
          result.push('G');
          break;
      }
    }
    return result.join('')
  }


  //Ivan solution 
  function DNAStrand(dna){
    let result = ''
    for(let i = 0; i < dna.length; i++){
      if(dna[i] == 'A') result += 'T'
      if(dna[i] == 'T') result += 'A'
      if(dna[i] == 'C') result += 'G'
      if(dna[i] == 'G') result += 'C'
    }
    return result 
  }


  //shorter solutions 
  var pairs = {'A':'T','T':'A','C':'G','G':'C'};

  function DNAStrand(dna){
    return dna.split('').map(function(v){ return pairs[v] }).join('');
  }


  function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
  }