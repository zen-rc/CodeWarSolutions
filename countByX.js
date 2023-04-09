// instructions
    // Create a function with two arguments that will return an array of the first n multiples of x.
    // Assume both the given number and the number of times to count will be positive numbers greater than 0.
    // Return the results as an array or list ( depending on language ).
    // Examples
    // countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
    // countBy(2,5) === [2,4,6,8,10]

// my solution
function countBy(x, n) {
    let arr = [];
  
    for (let i = 0; i < n; i++) {
      arr.push(x * (i + 1));
    }
  
    return arr;
  }

//   other solutions
function countBy(x, n) {
    var z = [];
    for (var i = x; i <= (x * n); i += x){
    z.push(i);
    }
    return z
    }
    
