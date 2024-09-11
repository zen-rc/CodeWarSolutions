// INSTRUCTIONS
    // Your task is to sort a given string. Each word in the string will contain a single number. 
    // This number is the position the word should have in the result.
    // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
    // If the input string is empty, return an empty string.
    // The words in the input String will only contain valid consecutive numbers.

// PREP
    // passing a string
    // returning a string
    // example: Input: "is2 Thi1s T4est 3a"  --> Output: "Thi1s is2 3a T4est"

// PSUEDO CODE
    // split string
    // create loop
    // isolating the number within the string
    // convert type into Int
    // create an object

// MY SOLUTION
function order(words){
    let arr = words.split(' ')
    let regex = /[1-9]/
    let OrderOfWords = {} //storing the words and positions
  
    arr.forEach(word => { 
     let num = word.match(regex) //grabbing the number
      OrderOfWords[num] = word //storing position and word
    })
    let sentenceLength = Object.keys(OrderOfWords).length
    
    return Object.entries(OrderOfWords).reduce((accumulator, [position, word], index) => { //join the words into a sentence
      return  index + 1 == sentenceLength ? //makes the index and sentence Length equal
        accumulator + word : //end of the sentence
        accumulator + word + ' ' //else, adds space
    }, '')
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

