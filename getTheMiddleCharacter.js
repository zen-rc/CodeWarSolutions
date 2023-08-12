
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

//2

//3

//4

//5

//6

//7

//8

//9

//10

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