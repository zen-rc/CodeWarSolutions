// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// my solution
function findAverage(array) {
    if(array.length === 0) {
        return 0
    } else {
  const numerator = array.reduce((a,b) => a + b, 0)
  const denominator = array.length
  
  const result = numerator/ denominator
  
  return result
    }
}

// other solutions
function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}