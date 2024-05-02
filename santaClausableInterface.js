  // INSTRUCTIONS
  // You probably know, that in Javascript (and also Ruby) there is no concept of interfaces.
  // There is only a concept of inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent prototype / class. We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.
  
  // Rules:
  // The SantaClausable interface is implemented, if all of the following methods are defined on an object:
  // sayHoHoHo() / say_ho_ho_ho
  // distributeGifts() / distribute_gifts
  // goDownTheChimney() / go_down_the_chimney

// GIVEN PROBLEM TO functionCORRECT 
isSantaClausable(obj) {
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

// PSUEDO CODE
// passing an object
// returning a boolean
// interface is a contract (must haves)

// MY SOLUTION
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

// 1

// 2

// 3

// 4

// 5

// 6

// 7

// 8

// 9

// 10

// OTHER SOLUTIONS

