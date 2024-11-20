// INSTRUCTIONS
    // Write a function, persistence, that takes in a positive parameter 
    // num and returns its multiplicative persistence, which is the number
    //  of times you must multiply the digits in num until you reach a single 
    // digit.

// PREP
    // passing a number
    // returning a number of times the function is run
    // Input: 999 --> Output: 4 

// PSUEDO CODE
    // split into array
    // reduce
    // length > 1 ? count++ run again: return count
    // let count = 0

// MY SOLUTION
function persistence(num) {
    let count = 0
  const check = (digit) => digit.toString().split('').reduce((a,b) => a * b)
    let digits = num
  while(digits.toString().length > 1) {
    count++
    digits = check(digits)
    console.log(digits)
  }
    return count
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
const persistence = num => {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
  }

    // solution 2
function persistence(num, cnt=0) {
    let arrayNum = num.toString().split('');
    return arrayNum.length === 1 ?
      cnt :
      persistence(arrayNum.reduce((x,y) => x*y), ++cnt)
  }

// solution 3
function persistence(num) {
    var digit = 0;
    for(digit; num.toString().length > 1; i++){
      num = num.toString().split('').reduce(function(x,y){return x*y});
    }
    return i;
}