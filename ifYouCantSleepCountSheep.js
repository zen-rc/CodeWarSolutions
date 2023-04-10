//INSTRUCTIONS
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.


//PSUEDO CODE EXPLANATION
//   create an array
//   create a loop that runs num times and concatonates num + "sheep..."
//   return the array and .join() as a string

//MY SOLUTION
const countSheep = num => {

  let sheepArray = []
  for(let i = 0; i < num; i++) {
     sheepArray = (i + 1) + "sheep"
  }
 return sheepArray.join("")
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