// INSTRUCTIONS
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
    // 16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// PREP
    // n is a number
    // return a single digit number OR run function again

// PSUEDO CODE
    // conditional if n < 9 ? 
    // if not split
    // reduce the number

// MY SOLUTION
const digitalRoot = (n) => n > 9 ? digitalRoot(`${n}`.split('').reduce((a,c) => a + Number(c) , 0 )) : n


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
function digital_root(n) {
    return (n - 1) % 9 + 1;
  }
