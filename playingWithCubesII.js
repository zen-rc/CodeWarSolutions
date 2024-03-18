// INSTRUCTIONS
    // Hey Codewarrior!
    // You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!
    // Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!
    // The constructor taking no arguments should assign 0 to Cube's Side property.
    
// PREP
  // Implement the constructor so that it can take an integer for the side or no args

// ORIGINAL GIVEN PROBLEM TO FIX
class Cube {
  constructor(side){
    this.side = side === undefined ? 0 : side < 0 ? -side : side
  //   checking if the side is undefined means 
  // that we are checking if it has been assigned any value
  }
  
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

// PSUEDO CODE
    // This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  constructor(side){
    this.side = side === undefined ? 0 : side < 0 ? -side : side
  //   checking if the side is undefined means 
  // that we are checking if it has been assigned any value
  }
}
// MY SOLUTION
  class Cube {
    constructor(side) {
      this.setSide(side)
    }
  
    getSide() {
      return this.side
    }
    
    setSide(side = 0) {
      this.side = Math.abs(side)
    }
// THE FOLLOWING IS PRACTICE, NOT OFFICIAL SOLUTION
    getArea() { //not a part of the solution. Added practice
        return this.side ** 2
    }
    // ^^^ this is a getter
  }
  let square = new Cube(-3) // also not a part of solution

  square.getArea()
// THE PREVIOUS IS PRACTICE, NOT OFFICIAL SOLUTION

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