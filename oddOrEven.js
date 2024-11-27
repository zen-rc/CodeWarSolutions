// INSTRUCTIONS
    // Given a list of integers, determine whether the sum of its elements is odd or even.
    // Give your answer as a string matching "odd" or "even".
    // If the input array is empty consider it as: [0] (array with a zero).

// PREP
    // passing an array of numbers
    // returning a string of either odd or even
    // example: Input: [0, -1, -5] --> Output: "even"

// PSUEDO CODE
    // reduce the array
    // condiotional to see if remainder is 0
    // yes? even. no? odd

// MY SOLUTION
const oddOrEven = (array) => array.reduce((a,c) => a + c, 0) % 2 == 0 ? 'even' : 'odd'

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
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }
