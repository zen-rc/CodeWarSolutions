
//INSTRUCTIONS
//You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, return
// the middle 2 characters.


//PSUEDO CODE EXPLANATION


//MY SOLUTION
function getMiddle(s) {
  const mid = Math.floor(s.length / 2);

  if (s.length % 2 !== 0) {
    return s.charAt(mid);
  } else {
    return s.charAt(mid - 1) + s.charAt(mid);
  }
}


//1
function getMiddle(s) {
  const mid = Math.floor(s.length / 2)

  if(s.length % 2 !== 0) {
    return s.charAt(mid)
  } else {
    return s.charAt(mid - 1) + s.charAt(mid)
  
  }
}
//2
function getMiddle(s) {
  const mid = Math.floor(s.length / 2)

  if(s.length % 2 !== 0) {
    return s.charAt(mid)
  } else {
    return s.charAt(mid)
  }
}
//3
function getMiddle(s) {
  const mid = Math.floor(s.length / 2)

  if(s.length % 2 !== 0) {
    return s.charAt(mid)
  } else {
    return s.charAt(mid - 1) + s.charAt(mid)
  }
}
//4
function getMiddle(s) {
  const mid = Math.floor(s.length / 2)

  if(s.length % 2 !== 0) {
    return s.charAt(mid)
  } else {
    return s.chartAt(mid - 1) + s.charAt(mid)
  }
}
//5
function getMiddle(s) {
  const mid = Math.floor(s.length / 2)

  if(s.length % 2 !== 0){
    return charAt(mid)
  } else {
    return s.charAt(mid - 1) + charAt(mid)
  }
}
//6
function getMiddle(s) {
  const mid = Math.floor(s.length / 2)

  if(s.length % 2 !== 0) {
    return s.charAt(mid)
  } else {
    return s.charAt(mid - 1) + s.charAt(mid)
  }
}
//7
function getMiddle(s) {
  const mid = Math.floor(s.length / 2)

  if(s.length % 2 !== 0) {
    return s.charAt(mid)
  } else {
    return s.charAt(mid - 1) + s.charAt(mid)
  }
}
//8
function getMiddle(s) {
  const mid = Math.floor(s.length / 2)

  if(s.length % 2 !== 0) {
    return s.charAt(mid)
  } else {
    return s.charAt(mid - 1) + s.charAt(mid)
  }
}
//9
function getMiddle(s) {
  const mid = Math.floor(s.length / 2)

  if(s.length % 2 !== 0) {
    return s.charAt(mid)
  } else {
    return s.charAt(mid - 1) + s.charAt(mid)
  }
}
//10
function getMiddle(s) {
  const mid = Mathfloor(s.length / 2)

  if(s.length % 2 !== 0) {
    return s.charAt(mid)
  } else {
    return s.charAt(mid - 1) + s.charAt(mid)
  }
}
//OTHER SOLUTIONS
function getMiddle(s) {
  const mid = Math.floor(s.length / 2);
   const strArr = s.split('')
   
    if (s.length % 2 !== 0) {
       console.log(s)
      return strArr[mid]
      } else {
         console.log(s)
      return strArr[mid - 1] + strArr[mid]
      }
 }