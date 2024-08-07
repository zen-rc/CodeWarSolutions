// INSTRUCTIONS
    // Some numbers have funny properties. For example:
    // 89 --> 8¹ + 9² = 89 * 1
    // 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
    // 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
    // Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
    // In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
    // If it is the case we will return k, if not return -1.
    
    // Note: n and p will always be strictly positive integers.


// PREP
    // n is the orginal number that is being passed
    //  that gets seperated into digits
    // p is the exponent that you starts
    //  the sequence of powers for said seperated digits
    // k is the amount of times n goes into the sum 

// PSUEDO CODE
    // create a variable to hold sum
    // convert n into string, and split
    // in a for loop, and increment p up for every n digit
    // use method to find product of n digits to p
    // if remainder exists, return -1

// MY SOLUTION
function digPow(n, p) {
    let digits = n.toString().split('')
    let currentPow = p
   let sum =  digits.reduce((accumulatedSum,currentDigit) => {
     return accumulatedSum += Math.pow(currentDigit,currentPow++)
    },0)
   console.log(`this is sum ${sum}`)
   
    if(sum < n || sum % n != 0) {
      return -1
    } else {
      return sum / n
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

