// INSTRUCTIONS
    // Usually when you buy something, you're asked whether your credit card number,
    // phone number or answer to your most secret question is still correct.
    // However, since someone could look over your shoulder, you don't want that 
    // shown on your screen. Instead, we mask it.
    // Your task is to write a function maskify, which changes all but the 
    // last four characters into '#'.

// PREP
    // passing something (need to check if string)
    // returning a string with hashes except last 4 characters
    // example: "64607935616" -->      "#######5616"

// PSUEDO CODE
    // using (-4) or cc.length - 4
    // could use slice
    // conditional checks the length if cc.length <= 4 return cc

// MY SOLUTION
const maskify = cc => cc.length <= 4 ? cc : '#'.repeat(cc.length - 4) + cc.slice(-4)

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
function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
  }

// solution 2
const maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);

// solution 3
function maskify(cc) {
    return cc.split('').reduce(function(p, c, i) {
        return i < cc.length - 4 ? p + '#' : p + c;
    }, '');
  }