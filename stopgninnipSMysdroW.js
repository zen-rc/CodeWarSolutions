// INSTRUCTIONS
    // Write a function that takes in a string of one or more words, 
    // and returns the same string, but with all five or more letter words
    // reversed (Just like the name of this Kata). Strings passed in will 
    // consist of only letters and spaces. Spaces will be included only when 
    // more than one word is present.
// PREP
    // passing a string (sentence)
        // return a string with any word >= 5 letters reversed
        // example: 
        // Input: spinWords( "Hey fellow warriors" ) => Output: "Hey wollef sroirraw" 

// PSUEDO CODE
    // split the string
    // map loop through the string
    // conditional to check if element is >= 5
    // if so, split and reverse and join
    // else move on

// MY SOLUTION
    function spinWords(string){
        let arr = string.split(' ')
        let rev = arr.map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ')

        return rev
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
function spinWords(str){
  return str.split(' ').map(spinSingleWord).join(' ');
}

// solution 2
function spinSingleWord(word){
  return word.length>4 ? word.split('').reverse().join('') : word;
}
