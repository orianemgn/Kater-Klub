// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript



function numObj(s){
    let alphabet = 'abcdefghijklmnopqrstwyxz'
    let sAlphabet = []; 
    
    for(let i=0; i<alphabet.length; i++){
        console.log(alphabet[i].charCodeAt())
      for(let j=0; j<s.length; j++){
        if(s[j] === alphabet[i].charCodeAt()){
          sAlphabet.push(s[j] + ':' + alphabet[i])
        }
      }
      console.log(sAlphabet)
      }
    
  //   for(let i=0; i<s.length; i++){
  //     obj[s[i]] = ''
      
  //   }
   
  
  
  console.log('v'.charCodeAt())
    
    
  }
  
  
  numObj([118,117,120]) //,[{'118':'v'}, {'117':'u'}, {'120':'x'}]);
  //numObj([101,121,110,113,113,103]) //,[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]);
  