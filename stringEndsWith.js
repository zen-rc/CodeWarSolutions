// INSTRUCTIONS
    // Complete the solution so that it returns true if the first argument(string)
    //  passed in ends with the 2nd argument (also a string).

    // PREP
    // passing two string
    // returning a boolean
    // solution('abc', 'bc') // returns true
    // solution('abc', 'd') // returns false
    // has to be ENDING of str. Cannot be any position.

// PSUEDO CODE
    // conditional
    // be able to compare ending to string
    // use the endsWith method

// MY SOLUTION
function solution(str, ending){
  return str.endsWith(ending)
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
function solution(str, ending){
  return str.substr(-ending.length) == ending;
}
// solution 2
function solution(str, ending){
  return str.slice(0 - ending.length) === ending;
}
// solution 3
function solution(str, ending){
  var l = ending.length;
  var str = str.slice(-l);
  return str.match(ending) ? true : false;
}