// instructions
    // Write a function that takes an array of numbers and returns the
    // sum of the numbers. The numbers can be negative or non-integer.
    // If the array does not contain any numbers then you should return 0.

 // psuedo code
    // Sum Numbers
    // numbers is an array
    // reduce method to be used on the array
    // conditional that returns 0 if array is empty

// my solution

const sum = numbers => numbers.length === 0 ? 0 : numbers.reduce((a,b) => a + b, 0)

// other solutions
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }