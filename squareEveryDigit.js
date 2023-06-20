// instructions
    // Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
    // For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
    // Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
    // Note: The function accepts an integer and returns an integer.


// my solution
function squareDigits(num) {
  let arr = num.toString().split('');
  let sqarr = [];

  for (let digit of arr) {
    let squaredDigit = Math.pow(Number(digit), 2);
    sqarr.push(squaredDigit);
  }

  let str = sqarr.join('');
  let result = Number(str);
  console.log(result);
  return result;
}

// other solutions
    // 1
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
    // 2
const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));