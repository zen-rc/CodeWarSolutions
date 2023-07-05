// INSTRUCTIONS
    // Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// PREP
// // passing an array of integers
// // returning sum

// PSUEDO CODE
// // loop
// // finds the lowest two numbers
// // use sort
// // take the first two values
// // add the values <-- what i return

// MY SOLUTION
function sumTwoSmallestNumbers(numbers) {  
    let descending = numbers.sort((a,b) => a - b)
    
    console.log(descending)
    
    return descending[0] + descending[1]
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
function sumTwoSmallestNumbers(numbers) {
  
    let lowest = Infinity
    let low = Infinity
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < lowest) {
        low = lowest;
        lowest = numbers[i];
      } else if (numbers[i] < low) {
        low = numbers[i];
      }
    }
  
    return lowest + low;
  }
