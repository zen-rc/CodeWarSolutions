// INSTRUCTIONS
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// PREP
// passing two seperate arrays
// returning for COMPLETE sum of both arrays
// arr1 = [1, 2, 3]
// arr2 = [4, 5, 6]
// return 21

// PSUEDO CODE
// reduce method
// add the sums together

// MY SOLUTION
function arrayPlusArray(arr1, arr2) {
  
    let sum1 = arr1.reduce((a,b) => a + b, 0)
    let sum2 = arr2.reduce((a,b) => a + b, 0)
    
    return sum1 + sum2
    
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
function arrayPlusArray(arr1, arr2) {
    let answer = 0
    for (let i = 0; i < arr1.length; i++) {
      answer += (arr1[i] + arr2[i])
      
    }
    return answer    
  }
  
// solution 2
  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }

// solution 3
  function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }

// solution 4
// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
    return [].concat(...arrays).reduce((a,b) => a+b,0)
  }