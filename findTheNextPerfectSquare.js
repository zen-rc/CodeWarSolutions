// INSTRUCTIONS
    // You might know some pretty large perfect squares. But what about the NEXT one?
    // Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

    // If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

    // Examples:(Input --> Output)
        // 121 --> 144
        // 625 --> 676
        // 114 --> -1 since 114 is not a perfect square

// PREP
    // passing a integer that 
    // Return the next square if sq is a perfect square, -1 otherwise

    // Example: 
    // 625 --> 676
    // 114 --> -1 since 114 is not a perfect square
// PSUEDO CODE

// MY SOLUTION
function findNextSquare(sq) {
    let square = Math.sqrt(sq)
  
    if(square % 1 != 0) {
      return -1
    } else {
      return Math.pow(square + 1, 2)
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

// OTHER SOLUTIONS
// solution 1
const findNextSquare = sq => Math.sqrt(sq) % 1 != 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2)

function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }
    return -1;
}

// solution 2
function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
      return Math.pow(root + 1, 2);
    } else {
      return -1;
    }
  }