// INSTRUCTIONS
    // Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]



// PREP

// PSUEDO CODE

// MY SOLUTION
const maps = (x) => x.map((n) => (n * 2))

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

// Defining a function named 'multiply' using regular function declaration
function multiply(x) {
    return function(y) {
        return x * y;
    };
}

// Using the 'multiply' function to create a specialized function
var double = multiply(2);  // Here, x is set to 2

// Using the specialized function to double a value
var result = double(5);    // Here, y is set to 5

console.log(result);  // Output: 10 (2 * 5)

// ^^^^^^^^^
const multiply = x => y => x * y;
const maps = x => x.map(multiply(2));


function multiply(multiplier) {
    return function(y) {
        return multiplier * y //y is the variable that is coming from the array --> gets passed in
    } 
}

const maps = x => x.map((y) => 2 * y);
