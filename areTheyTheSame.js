// INSTRUCTIONS
    // Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
    //  that checks whether the two arrays have the "same" elements, with 
    // the same multiplicities (the multiplicity of a member is the number 
    // of times it appears). "Same" means, here, that the elements in b are 
    // the elements in a squared, regardless of the order.
    // If a or b are nil (or null or None, depending on the language), 
    // the problem doesn't make sense so return false.

// PREP
    // passing an array of numbers AND an array of those numbers squared
    // return a boolean

// PSUEDO CODE
    // array length != ? false
    // sort both arrays
    // loop through arrays
    // check if value b is square of value a, if so

// MY SOLUTION
function comp(array1, array2){
    if(array1 == null || array2 == null) {
      return false
    }
    if(array1.length != array2.length) {
      return false
    }
    let a = array1.sort((a, b) => a - b)
    let b = array2.sort((a, b) => a - b)
  
    for(let i = 0; i < array1.length; i++) {
      if(a[i] ** 2 !== b[i]) {
        return false
       }
      }
    return true
    }
    // solution 1
    function comp(array1, array2){
        const isNull = array1 == null || array2 == null
         if(isNull) {
          return false
        }
        
        const isDifferentLength = array1.length != array2.length
        if(isDifferentLength) {
          return false
        }
        const ascending = (a,b) => a - b
        
        const sortedArray1 = array1.sort(ascending)
        const sortedSquaredArray= array2.sort(ascending)
        
        for(let i = 0; i < array1.length; i++) {
            if(sortedArray1[i] ** 2 !== sortedSquaredArray[i]) {
              return false
             }
            }
        return true
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
