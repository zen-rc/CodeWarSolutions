//INSTRUCTIONS
//I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]


//PSUEDO CODE EXPLANATION


//MY SOLUTION
const humanYearsCatYearsDogYears = humanYears => {
  let catYears = 0;
  let dogYears = 0;
  if (humanYears === 1) {
    dogYears = 15;
    catYears = 15;
  } else if (humanYears === 2) {  
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 4 * (humanYears - 2) + 24;
    dogYears = 5 * (humanYears - 2) + 24;
  }
  return [humanYears, catYears, dogYears];
}

//1

//2

//3

//4

//5

//6

//7

//8

//9

//10

//OTHER SOLUTIONS
var humanYearsCatYearsDogYears = function(y) {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}