// INSTRUCTIONS
// You will be given an array of numbers. 
// You have to sort the odd numbers in ascending order while l
// eaving the even numbers at their original positions.

// PREP
// passing an array of number
// return an array with odd numbers in ascending order, and even maintaining same index
// example
// Input: [5, 8, 6, 3, 4]  => Output: [3, 8, 6, 5, 4]

// PSUEDO CODE
// map array and replace odds with x,
// while pushing odds into new array
// sort the odd array
//loop through new array and replace x's with odd numbers in sequence

// MY SOLUTION
function sortArray(array) { 
    let oddNumbers = []
    let j = 0 //variable to increment up on odd array
    const isOdd = (e) => e % 2 !== 0


    let newArr = array.map(e => { //put the array in correct sequence
      if(isOdd(e)) {
        oddNumbers.push(e)
        e = 'x'
      }
      return e //i just need to return something
      
    })
    
    oddNumbers.sort((a,b) => a - b) //correct order for the odd numbers to be pushed in
      
    let sortedArr = newArr.map(e => { //replacing the x's with the odd numbers in correct sequence
      if(e == 'x') {
        e = odd[j]
        j++
        
      }
      return e
    })
    return sortedArr
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
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }
