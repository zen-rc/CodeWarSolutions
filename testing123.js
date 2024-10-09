// INSTRUCTIONS
    // Your team is writing a fancy new text editor and you've been tasked with
    // implementing the line numbering.
    // Write a function which takes a list of strings and returns each line 
    // prepended by the correct number.
    // The numbering starts at 1. The format is n: string. Notice the colon and 
    // space in between.

// PREP
    // returning new array with numbers and strings ("1: a")
    // passing an array of strings
    // example
    // Input: ["a", "b", "c"] --> Output: ["1: a", "2: b", "3: c"]
    
    // for map, the position of the variable that is passed matters (see: map mdn syntax)
    // 1 is for element, 2 is for element index, 3 is for array

// PSUEDO CODE
    // iterate over the array with map
    // modify array with contains `${i + 1}: ${array[i]}`

// MY SOLUTION
const number = array => array.map((e, i) => `${i + 1}: ${e}`)

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
function number(arr) {
    return arr.map((e, i) => `${++i}: ${e}`);
  }
