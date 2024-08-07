// INSTRUCTIONS
    // There is an array with some numbers. 
    // All numbers are equal except for one. Try to find it!
    // findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    // findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
    // It’s guaranteed that array contains at least 3 numbers.
    // The tests contain some very huge arrays, so think about performance.


// PREP
    // passing an array
    // returning the number that is not like the others
    // example
    // Input: [ 1, 1, 1, 2, 1, 1 ] --> Output: 2

// PSUEDO CODE
    // organize array in numerical sequence
    // return the highest and lowest value
    //  and check if it exists in array after being popped off
    // if index is -1, return value

// MY SOLUTION
function findUniq(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    console.log(sortedArr)
    let highest = sortedArr[arr.length - 1]
    console.log(`this number is the highest ${highest}`)
    
    let lowest = sortedArr[0]
    console.log(`this number is the lowest ${lowest}`)
     
    return sortedArr[0] == sortedArr[1] ? highest : lowest
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
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }

// solution 2
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }