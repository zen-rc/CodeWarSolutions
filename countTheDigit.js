// INSTRUCTIONS
    // Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
    // Square all numbers k (0 <= k <= n) between 0 and n.
    // Count the numbers of digits d used in the writing of all the k**2. 
    // Implement the function taking n and d as parameters and returning this count.
    
    // Examples:
    // n = 10, d = 1 
    // the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
    // We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
    // The function, when given n = 25 and d = 1 as argument, should return 11 since
    // the k*k that contain the digit 1 are:
    // 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
    // So there are 11 digits 1 for the squares of numbers between 0 and 25.
    // Note that 121 has twice the digit 1.

// PREP
// passing two integers n, and d (both numbers)
// returning a number (a total)
// Input: n = 10, d = 1 => Output: 4

// PSUEDO CODE
    // let arr = [] (will be pushing squares into)
    // let square = i ** 2
    // let char = square.toString()
    // arr.push(char)
    // loop that generates squares up until n into an array
    // filter out all numbers besides the specific digit passed
    // return length of the array

// MY SOLUTION
function nbDig(n, d) {
  let str = ''
  
  for(let i = 0; i <= n; i++) { 
    str += i ** 2
  }
return str.split('').filter((num) => num == d).length
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
nbDig = (n, d) => Array.from(Array(n + 1), (e, i) => i * i).join('').match(new RegExp(d, 'g')).length;

// solution 2
function nbDig(n, d) {
    result = '';
    for (let i = 0; i <= n; i++) {
      result += i ** 2;
    }
    return result.split(d).length - 1;
  }
