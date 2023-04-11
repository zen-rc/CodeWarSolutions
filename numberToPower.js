//INSTRUCTIONS
//The goal is to create a function of two inputs number and power, that "raises" the number up to power 
// (ie multiplies number by itself power times).


//PSUEDO CODE EXPLANATION


//MY SOLUTION
function numberToPower(number, power){
    console.info(Math.log2(1024));
    // Create a  variable
    let total = 1
  //   loop
    for(let i = 0; i < power; i++) {
      total *= number
    }
    return total
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
const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power-1) : 1