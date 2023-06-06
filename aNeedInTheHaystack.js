// instructions
    // Can you find the needle in the haystack?
    // Write a function findNeedle() that takes an array full of junk but containing one "needle"
    // After your function finds the needle it should return a message (as a string) that says:
    // "found the needle at position " plus the index it found the needle, so:
    // "found the needle at position 6"

// psuedo code
    // find the string containing needle
    // the parameters is an array
    // find the index of the needle string
    // template literal containing `found the needs at position ${result}`
    // would i be using findIndex()
    // an array method that finds a specific value, and the index of it
    // create a function that requires element to deeply equal 'needle'


// my solution
const findNeedle = haystack => {
  
    const result = haystack.findIndex((e) => e === 'needle')
    
    return `found the needle at position ${result}`
  }


// other solutions
    // solution 1
const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

    // solution 2
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
  }