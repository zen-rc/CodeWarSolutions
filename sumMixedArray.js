// INSTRUCTIONS
    // Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
    // Return your answer as a number.

// PREP

// PSUEDO CODE


// MY SOLUTION
function sumMix(x){
    let num = x.map(n => parseInt(n))
    
    return num.reduce((a,b) => a + b, 0)
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

// jeff solution
function sumMix(x){
    x.forEach((n,i) => {
        x[i] = parseInt(n)
        })
      console.log(x)
      return x.reduce((a,b) => a + b, 0)
    }

// solution 1
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

// solution 2
const sumMix=x=>x.reduce((a,b)=>+b+a,0)