// INSTRUCTIONS
Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
// PREP

// PSUEDO CODE

// ORIGINAL PROBLEM
function Dog (breed) {
    this.breed = breed;
  }
  
  var snoopy = new Dog("Beagle");
  
  snoopy.bark = function() {
    return "Woof";
  };
  
  var scoobydoo = new Dog("Great Dane");

// MY SOLUTION
class Dog {
    constructor(breed) {
    this.breed = breed;
    }
    bark() { //why dont i need prototype?
      return 'Woof'}
  }
  
  
  var snoopy = new Dog("Beagle");
  
  var scoobydoo = new Dog("Great Dane")

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
function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

Dog.prototype.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

// solution 2
class Dog {
    constructor(breed) {
        this.breed = breed;
    }
    
    bark() {
        return "Woof";
    }
}

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");