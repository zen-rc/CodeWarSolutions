// INSTRUCTIONS
    // A pangram is a sentence that contains every 
    // single letter of the alphabet at least once.
    //  For example, the sentence "The quick brown fox jumps over the lazy dog"
    // is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
    // Given a string, detect whether or not it is a pangram.
    //  Return True if it is, False if not. Ignore numbers and punctuation.


// PREP
    // passing a string
    // returning a boolean
    // Example
    // Input:  "The quick brown fox jumps over the lazy dog" -> Output: True

// PSUEDO CODE
    // create a object
    // create a loop
    // create a key pair that holds current letter and number except spaces
    // check the lenght of the object
    // return true if the object length is 26

// MY SOLUTION
function isPangram(string){

    let alphabet = {} 
    let arr = string.split('')
    let regex = /[a-z]/g //limit kind of characters in object
  
    arr.forEach(letter => {
      letter = letter.toLowerCase()
      
      if(letter.match(regex)){ //only alphabet in the object
        if(letter in alphabet) { 
          alphabet[letter] += 1 //letter already exists in object
        } else {
          alphabet[letter] = 1 //key-pair does not exist yet
    }}
      
  })
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

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }

  function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
  } //check this solution

