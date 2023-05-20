// instructions
  // You are given a program sumSquares that takes
  // an array as input and returns the sum of the squares of each item in an array. For example:
  // sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
  // sumSquares([7,3,9,6,5]) === 200
  // sumSquares([11,13,15,18,2]) === 843
  // 
  // Shorten the code such that it meets the requirements.
  // A few hints:
  // Try researching about built-in Array methods; they may help shorten your code a lot

  // psuedo code
    //loop through the array and ensure that all values are ^2
      // you could use .forEach() or .map() ... doesnt really matter
    // use the reduce method to find the sum of all these values

//my solution
function sumSquares(array) {
  return array.map(i => i ** 2).reduce((accumulator, currentValue) => accumulator + currentValue)
}

//other solutions
function sumSquares(array) {
  return array.reduce((a,b) => a + b ** 2, 0);
}

//1
function sumSquares(array) {
  return array.map(i => i ** 2).reduce((a,b) => a + b)
}
// 2
function sumSquares(array) {
  return array.map(i => i ** 2).reduce((a,b) => a + b)
}
// 3
function sumSquares(array) {
  return array.map(i => i ** 2).reduce((a,b) => a + b)
}
// 4
function sumSquares(array) {
  return array.map(i => i ** 2).reduce((a,b) => a + b)
}
// 5
function sumSquares(array) {
  return array.map(i => i ** 2).reduce((a,b) => a + b)
}
// 6
function sumSquares(array) {
  return array.map(i => i ** 2).reduce((a,b) => a + b)
}
// 7
function sumSquares(array) {
  return array.map(i => i ** 2).reduce((a,b) => a + b)
}
// 8
function sumSquares(array) {
  return array.map(i => i ** 2).reduce((a,b) => a + b)
}
// 9
function sumSquares(array) {
  return array.map(i => i ** 2).reduce((a,b) => a + b)
}
// 10
function sumSquares(array) {
  return array.map(i => i ** 2).reduce((a,b) => a + b)
}


