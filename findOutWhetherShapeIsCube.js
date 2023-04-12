//INSTRUCTIONS
//To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer


//PSUEDO CODE EXPLANATION


//MY SOLUTION
const cubeChecker = (volume, side) => {
    if (volume <= 0 || side <= 0) {
      return false
    } else if (volume === side ** 3) {
      return true
    } else {
      return false
    }
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
const cubeChecker = (volume, side) => volume > 0 ? side*side*side === volume : false