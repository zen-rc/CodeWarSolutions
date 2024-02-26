// INSTRUCTIONS
    // We need the ability to divide an unknown integer into a given number of
    // even parts - or at least as even as they can be. The sum of the parts 
    // should be the original value, but each part should be an integer, and 
    // they should be as close as possible.
    // Complete the function so that it returns an array of integers 
    // representing the parts. If the input number is too small to split it 
    // into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts,
    //  there is only one valid solution for each input to your function!

    // Example:
        // splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
        // Inputs
        // The input to your function will always be valid for this kata.

// PREP
    // passing two numbers ("num" to be divided "parts")
    // return an array of mostly equal numbers

// PSUEDO CODE
// condtional checking if remainder is > 0
// if so,
// loop +1 to [end] /////// arr[i] += 1
// for(let i = arr)

// MY SOLUTION
var splitInteger = function(num, parts) {
    let remainder = num % parts
    let divide = Math.floor(num / parts)
    let arr = []
    
    for (let i = 0; i < parts; i++) {
    arr.push(divide)
    }
    
    for(let i = arr.length - 1; i > 0 ; i--){ 
      if(remainder > 0){
        arr[i] += 1
        remainder--
      }  
    }
    return arr
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
function splitInteger(num, parts) {
    const remainder = num % parts;
    const int = Math.floor(num / parts);
  
    return [
      ...new Array(parts - remainder).fill(int),
      ...new Array(remainder).fill(int + 1)
    ];
  }
