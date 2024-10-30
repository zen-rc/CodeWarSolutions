// INSTRUCTIONS
    // Simple, given a string of words, return the length of the shortest word(s).
    // String will never be empty and you do not need to account for different 
    // data types.

// PREP
    // passing a string
    // returning a number
    // "i love my cat" => 1

// PSUEDO CODE
    // conditional 

// MY SOLUTION
const findShort = (s) => Math.min(...s.split(' ').map(w => w.length))
//   console.log(arrLength)

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
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

    // solution 2
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;