// INSTRUCTIONS
// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// PREP

// PSUEDO CODE
    // a string is passed
    // split into array
    // loop an array
    // compare [j] and [k]
    // if j === k, return false, else true

// MY SOLUTION
function isIsogram(str){
    let arr = str.toLowerCase().split('')
    let used = []
    
    for(let i = 0; i < arr.length; i++) {
  //     let includes = !used.includes(arr[i])
  //     console.log(`this is the boolean ${includes}`)
      if(!used.includes(arr[i])) {
        used.push(arr[i])
      } else {
       
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
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

// original solution i wanted to do 
function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }
// solution 2
  function isIsogram(str)  {
    // Downcase everything, split on letters.
    str_lc = str.toLowerCase();
    var letters = str_lc.split('');
    
    // Utility: checks whether the given "value" at "index" is actually
    // first encountered at this "index" position within a string ("self").
    // Expected to be used with Array#filter.
    var check4uniqueness = function(value, index, self) { 
      return self.indexOf(value) === index;
    }
    
    // An isogram string contains no duplicate, hence must have the same
    // length than the array composed of unique letters from that string.
    return letters.filter(check4uniqueness).length == str.length;
  }