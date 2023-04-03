// instructions
    // Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
    // Examples:
    // n =   3, x = 1, y = 3 =>  true because   3 is 

// my solution
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0 ? true : false

// other solutions
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
  }