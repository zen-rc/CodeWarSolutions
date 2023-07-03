// passing an object
// returning a boolean


// interface is a contract (must haves)
function isSantaClausable(obj) {
    let pairSayHoHoHo = false
    let pairDisGifts = false
    let pairChimney = false
    
    for (const [key, value] of Object.entries(obj)) { //entries are pairs in an object
  
      pairSayHoHoHo = key == 'sayHoHoHo' && typeof value == 'function' ? true : false
  //     pairSayHoHoHo = typeof obj['sayHoHoHo'] == 'function' ? true : false
      pairDisGifts = key == 'distributeGifts' && typeof value == 'function'? true : false
      pairChimney = key == 'goDownTheChimney' && typeof value == 'function'? true : false
    }
    return pairSayHoHoHo && pairDisGifts && pairChimney
  }

  
// my solution
// passing an object
// returning a boolean


// interface is a contract (must haves)
function isSantaClausable(obj) {
    let pairSayHoHoHo = false
    let pairDisGifts = false
    let pairChimney = false
    
    for (const [key, value] of Object.entries(obj)) { //entries are pairs in an object
      
      pairSayHoHoHo = typeof obj['sayHoHoHo'] == 'function' ? true : false
      pairDisGifts = typeof obj['distributeGifts'] == 'function'? true : false
      pairChimney = typeof obj['goDownTheChimney'] == 'function'? true : false
      
    }
    return pairSayHoHoHo && pairDisGifts && pairChimney
  }