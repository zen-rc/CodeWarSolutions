// INSTRUCTIONS
    // Given two integers a and b, which can be positive or negative,
    // find the sum of all the integers between and including them and return it.
    // If the two numbers are equal return a or b.
    // Note: a and b are not ordered!
// PREP
    // passing two integers, can be negative.
    // return the sum of all numbers between the parameters passed
    // example: (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

    // PSUEDO CODE
    // if a === b, return a
    // create an array of the numbers in between (is this needed tho?)
    // let i = a and i <= b
    // use reduce method OR +=

// MY SOLUTION
function getSum(a, b) {
  let sum = 0;

  if (a === b) {
    return a
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i
      console.log(sum);
    }
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i
      console.log(sum);
    }
  } else {
    return 'There are no values. Try again';
  }
  return sum
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
function GetSum( a,b ) {
    var result = 0;
    var bigger = a > b ? a : b;
    var smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { result += i }
    return result
 }

//  solution 2
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }
