//INSTRUCTIONS
    // Bob needs a fast way to calculate the volume of a cuboid with three values:
    // the length, width and height of the cuboid. Write a function to help Bob with this calculation.

//MY SOLUTION
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      let volume = length * width * height
      return volume  
    }
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

//OTHER SOLUTIONS

// (PSUEDO CODE)
// Declare a variable called Kata
// Create a special part of your toolkit
// Define a placeholder function called Kata
// Add a method to calculate cuboid volume
// Convert inputs to numbers
// Check if any input is not a valid number
// If not, return volume as 0
// Check if any input is zero or negative
// If any is zero/negative, return volume as 0
// Calculate the volume using length, width, and height
// Return the special part of the toolkit
// Run the special part immediately


// (SOLUTION)
var Kata;

Kata = (function() {

  function Kata() {}

  
  Kata.getVolumeOfCuboid = function(length, width, height) {
    
    var l = parseFloat(length);
    var w = parseFloat(width);
    var h = parseFloat(height);

    
    if (isNaN(l) || isNaN(w) || isNaN(h)) {
      return 0; 
    }
    
    
    if (l <= 0 || w <= 0 || h <= 0) {
      return 0; 
    }
    
    
    return l * w * h;
  };

  
  return Kata;

})(); 

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