// INSTRUCTIONS
    // The goal of this exercise is to convert a string to a new string where 
    // each character in the new string is "(" if that character appears only 
    // once in the original string, or ")" if that character appears more than 
    // once in the original string. Ignore capitalization when determining if 
    // a character is a duplicate.

// PREP
    // passing a string
    // return a string with a series of parenthesis
    // example: Input: Success"  =>  Output: ")())())"

// PSUEDO CODE
    // create an object that holds each character in a word
    // split the passed word into an array
    // create a conditional that checks if element exists in object, if not, add to object
    // if so, increment value up.

    // find a way to reference 
    
    // function getAge(name) {
    //   return ages[name];
    // } // this is going to be needed in my conditional
    
    
    // name["s"] = 1 //to create a new key pair

// MY SOLUTION
function duplicateEncode(word){
    let answerObject = {}
    let result = ''
    let lowerCase = word.toLowerCase()
    let arr = lowerCase.split('')
    for(let i = 0; i < arr.length; i++) {
      if(answerObject[arr[i]] !== undefined) {
      console.log(answerObject['z'])
        answerObject[arr[i]] += 1
        console.log(answerObject[arr[i]])
      } else {
        for (const [key, value] of Object.entries(answerObject)) {
    console.log(`${key}: ${value}`);
  }
         answerObject[arr[i]] = 1
      }
    }
    console.log(answerObject)
    for(let i = 0; i < lowerCase.length; i++) {
      if(answerObject[lowerCase[i]] > 1) {
        result = result + ')'
      } else {
        result = result + '('
      }
    }
    return result
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
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
