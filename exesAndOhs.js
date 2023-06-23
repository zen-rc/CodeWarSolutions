//INSTRUCTIONS
    // Check to see if a string has the same amount of 'x's and 'o's.
    // The method must return a boolean and be case insensitive.
    // The string can contain any char.

// PREP
    // passing a string with any characters
    // return a true or false statement, based on x = o
    // examples:  XO("ooxXm") => true
    //            XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true

    // case insentive
    // return true if there are 0 x's and o's

// PSUEDO CODE EXPLANATION
    // use lowercase method on string
    // create two arrays
    // create two conditionals for x and o
    // push them into respective arrays
    // return the array lengths deeply equal to one another

//MY SOLUTION
function XO(str) {
    let lowstr = str.toLowerCase()
    
    let xArr = []
    
    let oArr = []
    
    for(let char of lowstr) {
      if(char === 'x') {
        xArr.push(char)
      } else if(char === 'o') {
        oArr.push(char)
      }
    }
     return xArr.length === oArr.length
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

//OTHER SOLUTIONS
// solution 1
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }

// solution 2
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }