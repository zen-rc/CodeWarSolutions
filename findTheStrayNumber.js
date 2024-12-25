// INSTRUCTIONS
    // You are given an odd-length array of integers, in which all of them are the same, except for one single number.
    // Complete the method which accepts such an array, and returns that single 
    // different number.
    // The input array will always be valid! (odd-length >= 3)

// PREP
    // parameters: array of numbers
    // return: the number that is different
    // example: [1, 1, 2] ==> 2

// PSUEDO CODE
    // conditional that checks if the elements are deeply equal to one another
    // if(numbers[0] === numbers[1]) {
    // strange = numbers.filter(number => numbers[0] !== number)
    // } else {
    //   strange = numbers.filter(number => numbers[numbers.length - 1] !== number)
    // }
    // filters out the number that is not equal

// MY SOLUTION
const stray = numbers => numbers[0] === numbers[1] 
? numbers.filter(number => numbers[0] !== number)[0]
: numbers.filter(number => numbers[numbers.length - 1] !== number)[0]

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
const stray = nums => nums.reduce((a, b) => a ^ b);

    // solution 2
let numbers = [1, 1, 2, 1]

function stray(numbers){

    for (var i in numbers){ // i = 1
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) { //indexOf == 0,, lastIndexOf == 3
       
        return numbers[i]
    }
    }
  }

    // solution 3
function stray(numbers) {
    var a = numbers.sort();
    
    if(a[0] != a[1]) {
      return a[0]
    } 
    return a[a.length-1]
  }

// solution 4
const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));