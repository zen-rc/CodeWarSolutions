// instructions
    // In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
    // For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// psuedo code
    // int and limit will always be numbers
    // 1 - infinity
    // limit will always be higher
    // returning an array
    //   creating values and push
    //   use a loop
    //   conditional that deeply equals the limit
    //   if(arr[array.length -1] === limit)
    //   use multiplication

// my solution
function findMultiples(integer, limit) {
    let arr = []
    
    for(let i = integer; i <= limit; i++){
      if( i % integer === 0) {
        arr.push(i)
      }
    } 
      return arr
    
    
    }

// other solutions
function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }