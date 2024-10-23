// INSTRUCTIONS
    // Finish the solution so that it sorts the passed in array of numbers.
    // If the function passes in an empty array or null/nil value then it 
    // should return an empty array.

// PREP
    // passing in an array (empty/null or with numbers)
    // return an array in ascending order
    // Example ---> Input: ([1, 2, 10, 50, 5]) => Output: [1,2,5,10,50]

// PSUEDO CODE
    // conditional that checks for null passed or empty or single element
    // sort into ascending

// MY SOLUTION
const solution = (nums) => nums === null || nums.length < 2 ? [] : nums.sort((a,b) => a - b)

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
function solution(nums){
    return nums ? nums.sort(function(a, b) { return a - b;}) : [];
  }
