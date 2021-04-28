//Dubstep
//https://www.codewars.com/kata/551dc350bf4e526099000ae5/solutions/javascript


//My old solution 
function songDecoder(song){
    let initial = song.split('WUB');
    let cleanArray = initial.filter(function(v){return v!== ''});
   let initialSong = cleanArray.join(' ');
    return initialSong
  }


  //My new solution 
  //search for WUB (also if more than one time WUB following each others) + delete space extremity of string
  function songDecoder(song){
    return song.replace(/(WUB)+/g," ").trim()
  }


  //Solution Simon 
  function songDecoder(song){
    return song.replace(/WUB| +/gi, ' ').replace(/ +/gi, ' ').trim()
  }