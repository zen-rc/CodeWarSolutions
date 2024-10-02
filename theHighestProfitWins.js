// INSTRUCTIONS
    // Ben has a very simple idea to make some profit: he buys something and sells 
    // it again. Of course, this wouldn't give him any profit at all if he was simply 
    // to buy and sell it at the same price. Instead, he's going to buy it for the 
    // lowest possible price and sell it at the highest.
    // Write a function that returns both the minimum and maximum number of the given 
    // list/array.

// PREP
    // Input: [1,2,3,4,5] --> Output: [1,5]
    
// PSUEDO CODE

// MY SOLUTION
const minMax = (arr) => [Math.min(...arr),Math.max(...arr)]

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
function minMax(arr){
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
  }
    
    // solution 2
function minMax(arr){
  var min = Math.min.apply(null, arr),
      max = Math.max.apply(null, arr);
  return [min, max];
}
