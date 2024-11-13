// INSTRUCTIONS
    // In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
    // The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
    // Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
    // You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
    // The string has a length greater or equal to one and contains only letters from ato z.
// PREP
    // ALWAYS passing a string of letters
    // returning a fraction of errors over string length
    // example: s="aaaxbbbbyyhwawiwjjjwwm"
                // printer_error(s) => "8/22"
// PSUEDO CODE
    // create num and den variables
    // loop through s
    // create conditional that checks if letter is before n
    // +1 to numerator if error
    // return error over string length.

    // MY SOLUTION
    function printerError(s) {
        const regex = /[n-z]/g;
        const numerator = s.match(regex) != null ? s.match(regex).length : 0
        console.log(numerator.length)
        const denominator = s.length
        
        return `${numerator}/${denominator}`
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
function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}

    // solution 2
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`

// solution 3
    var printerError = (s) => (s.match(/[n-z]/g) || []).length + '/' + s.length