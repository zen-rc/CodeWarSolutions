//instructions
  // You get an array of numbers, return the sum of all of the positives ones.
  // Example [1,-4,7,12] => 1 + 7 + 12 = 20
  // Note: if there is nothing to sum, the sum is default to 0.


//solutions
function positiveSum(arr) {
//   create conditional for if arr = []
  let sum = 0
  if(arr.length === 0) {
    return 0
  }
  for(let i = 0; i < arr.length; i++) {
    if( arr[i] > 0){
      sum += arr[i]
    }
  } console.log(sum)
  return sum
}

// other solutions
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);