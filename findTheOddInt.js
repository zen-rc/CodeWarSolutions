// INSTRUCTIONS
    // Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.



// PREP
// passing an array of integers
// returning integer that appears odd number of times (only 1)
// example: [1,1,2] should return 2, because it occurs 1 time (which is odd)

// PSUEDO CODE
// loop through array
// conditional?????

// MY SOLUTION
function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
      let oddCount = 0;
  
      for (let j = 0; j < A.length; j++) {
        if (A[i] === A[j]) {
          oddCount++;
        }
      }
  
      if (oddCount % 2 !== 0) {
        return A[i];
      }
    }
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
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }

  function findOdd(arr) {
    var result, num = 0;
  
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        num++;
      } else {
        num++;
        if (num % 2 != 0) {
          result = arr[i];
          break;
        }
      }
    }
    return result;
  }

  function findOdd(A) {
    return A.reduce(function(c,v){return c^v;},0);
  }
  