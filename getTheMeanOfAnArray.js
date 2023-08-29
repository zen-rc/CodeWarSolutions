// INSTRUCTIONS
    // It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
    // Return the average of the given array rounded down to its nearest integer.
    // The array will never be empty.

// PREP

// PSUEDO CODE

// MY SOLUTION
function getAverage(marks) {
  
    const sum = (a,b) => a + b
  
    return ~~(marks.reduce(sum) / marks.length)
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
function getAverage(marks){
    var sum = 0;
    
    for (var i in marks)
      sum += marks[i];
    // parseInt makes it a whole number
    return parseInt(sum / marks.length);
  }

// solution 2
const getAverage = (marks) => ~~marks.reduce((cma, x, n) => cma + (x - cma)/(n + 1));