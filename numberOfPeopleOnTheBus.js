// INSTRUCTIONS
    // You are provided with a list (or array) of integer pairs.
    // Elements of each pair represent the number of people that get on the bus 
    // (the first item) and the number of people that get off the bus 
    // (the second item) at a bus stop.
    // Your task is to return the number of people who are still on the bus after 
    // the last bus stop (after the last array). Even though it is the last bus stop,
    //  the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D 
    // Take a look on the test cases.
    // Please keep in mind that the test cases ensure that the number of people in 
    // the bus is always >= 0. So the returned integer can't be negative.
    // The second value in the first pair in the array is 0, since the bus is empty 
    // in the first bus stop.
// PREP
    // passing an array of pairs
    // return number of people on the bus
    // Example: 
      // Input: [[10,0],[3,5],[5,8]] -> Output: 5
// PSUEDO CODE

// MY SOLUTION
var number = function(busStops){
    return busStops.reduce((acc, busStop) => acc + (busStop[0] - busStop[1]), 0)
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
const number = busStops => {
    const sumOfIndex = x => busStops.map(arr => arr[x]).reduce((a, b) => a + b, 0);
    let enter = sumOfIndex(0);
    let leave = sumOfIndex(1);
    return enter - leave;
  }
