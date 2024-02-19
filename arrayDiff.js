// INSTRUCTIONS
    // Your goal in this kata is to implement a difference function,
    // which subtracts one list from another and returns the result.
    // It should remove all values from list a, which are present in list b keeping their order. 
    // arrayDiff([1,2],[1]) == [2]
    // If a value is present in b, all of its occurrences must be removed from the other: 
    // arrayDiff([1,2,2,2,3],[2]) == [1,3]

// PREP
    // passing two arrays
    // return a new array with common numbers filtered out
    // example: 
    // arrayDiff([1,2,2,2,3],[2]) == [1,3]

// PSUEDO CODE
    // destructure the array
    // use filter method to get new array

// MY SOLUTION
const arrayDiff = (a, b) => a.filter((number) => !b.includes(number))

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
function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }
