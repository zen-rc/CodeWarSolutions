// instructions

// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// psuedo code
    //create an empty array
    // create a loop that goes until num
    // push each value into the array
    // run the reduce method on the array
    // return the reduced number

// my solution
const summation = num => {
  let arr = []
  for(let i = 1; i <= num; i++) {
    arr.push(i)
  }
  return arr.reduce((a,b) => a + b , 0)
}

// other solutions
function summation(num) {
    return num * (num + 1) / 2
  }