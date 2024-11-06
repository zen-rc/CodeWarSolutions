// INSTRUCTIONS
    // In this kata you are required to, given a string, replace every letter 
    // with its position in the alphabet.
    // If anything in the text isn't a letter, ignore it and don't return it.
    // "a" = 1, "b" = 2, etc.

// PREP
    // passing a string
    // return a string of numbers WITH spaces
    // Input: 'a b c' => Output: '1 2 3'

// PSUEDO CODE
    // make the string an array
    // loop through the array
    // find the key pair that matches the element
    // push the value into an array
    // join by a space

// MY SOLUTION
function alphabetPosition(text) {
    let arr = text.toUpperCase().split('')
    let alphabet = {}
  
  for(let i = 0; i < 26; i++) {
    alphabet[String.fromCharCode(65 + i)] = i + 1
  }
    
    let numbers = arr.map(char => {
      if(typeof alphabet[char] === 'number') {
        return alphabet[char]
      }
      })
    let str = numbers.filter(i => typeof i !== 'undefined').join(' ')
    
    return str
    
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
    // solution 1
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

    // solution 2
function alphabetPosition(text) {
    return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
  }

    // solution 3
function alphabetPosition(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    
    return text.toLowerCase()
               .split('')
               .filter(t => letters.indexOf(t) > -1)
               .map(t => letters.indexOf(t)+1 || '')
               .join(' ');
  }