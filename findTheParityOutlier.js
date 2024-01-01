// INSTRUCTIONS
  // You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.


// PREP
  // passing an array of integers with a;; odd or even. 
  // return single element (integer) (strange number)
  // example: Input: [2, 4, 0, 100, 4, 11, 2602, 36] -->  Output: 11

// PSUEDO CODE
  // conditional that checks if index 0 and 1 are odd or even
  // conditional that checks if index length -1 and -2 is odd or even
  // if even, filter e => e % 2 != 0
  // if odd, filter e => e % 2 == 0

// MY SOLUTION
function findOutlier(integers){
    console.log(integers[0] % 2 != 0)
    console.log(integers[1] % 2 != 0)
    console.log(integers[0] % 2 == 0)
    console.log(integers[1] % 2 == 0)
    
  if(integers[0] % 2 != 0 && integers[1] % 2 != 0) {
    console.log('this is odd')
    return integers.filter(i => i % 2 == 0)[0]
  }
    else if(integers[0] % 2 == 0 && integers[1] % 2 == 0) {
    console.log('this is even')
       return integers.filter(i => i % 2 != 0)[0]
    
  } else if (integers[integers.length - 1] % 2 != 0 && integers[integers.length - 2] % 2 != 0) {
    console.log('this is odd')
     return integers.filter(i => i % 2 == 0)[0]
  } else if (integers[integers.length - 1] % 2 == 0 && integers[integers.length - 2] % 2 == 0) {
    console.log('this is even')
     return integers.filter(i => i % 2 != 0)[0]
  } else {
    return integers[1]
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
// solution 1
function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }
