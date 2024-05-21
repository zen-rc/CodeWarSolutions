// INSTRUCTIONS
    // Implement the function unique_in_order which takes as argument 
    // a sequence and returns a list of items without any elements with 
    // the same value next to each other and preserving the original order of elements.

// PREP
    // passing an iterable argument (string or array)
    // return an array unique in order
    // Example
    // Input: uniqueInOrder('AAAABBBCCDAABBB') --> Output: ['A', 'B', 'C', 'D', 'A', 'B']

// PSUEDO CODE
    // create variable to new array
    // use a loop to iterate
    // conditional to check if character is the same in the sequence as the previous

// MY SOLUTION
var uniqueInOrder = function(iterable){
    let arr = []
    //check for repeated characters
    for(let i = 0; i < iterable.length; i++) {
      let lastElement = arr.length - 1
      if(arr[lastElement] !== iterable[i]) { //checking the last character is not repeated
       arr.push(iterable[i])
      }
    }
     return arr
   }

// OPTIMIZED SOLUTION
const uniqueInOrder = iterable => [...iterable].filter(
    (element, index, array) => element != array[index - 1]
  )
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

