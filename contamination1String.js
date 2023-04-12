

//INSTRUCTIONS
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

//PSUEDO CODE EXPLANATION


//MY SOLUTION
const contamination = (text, char) => {
    // Code here ;)
    let textArray = text.split('')
    
    if(text === '' || char === ''){
      return ''
    } else {
        
      for(let i = 0; i < textArray.length; i++ ) {
        textArray[i] = char
      }
        return textArray.join('')
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
const contamination = (text, char) => char.repeat(text.length)