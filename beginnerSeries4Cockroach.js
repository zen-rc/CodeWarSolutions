// INSTRUCTIONS
// The cockroach is one of the fastest insects.
// Write a function which takes its speed in km per hour and 
// returns it in cm per second, rounded down to the integer (= floored).

// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
// PREP

// PSUEDO CODE
//passing in a number
// number is kilometers per /hour
// (from hours to seconds)

// km/hour to km/ sec

// MY SOLUTION

function cockroachSpeed(s) {
    let cm = s / 0.036
    
    return ~~cm
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
const cockroachSpeed = s => Math.floor(s / 0.036);

// solution 2
function cockroachSpeed(s) {
    const secsInHour = 3600;
    const centimetersInKilometers = 100000;
    
    return Math.floor((s*centimetersInKilometers)/secsInHour);
  }