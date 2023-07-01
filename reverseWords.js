// INSTRUCTIONS
    // Complete the solution so that it reverses all of the words within the string passed in.
    // Words are separated by exactly one space and there are no leading or trailing spaces.

// PREP
    // Example(Input --> Output):
    // "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// PSUEDO CODE
// convert into array
// reverse the words
// join

// MY SOLUTION
function reverseWords(str){
    return str.split(" ").reverse().join(" ")
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

//   OTHER SOLUTIONS

// solution 1

// Define a function named reverseWords that takes a string (str) as input
function reverseWords(str) {
    // Initialize a variable to keep track of the count of letters in a word
    let count_letters = 1;
    // Initialize an empty string to store the reversed words
    let new_string = "";
  
    // Iterate through the characters of the input string in reverse order
    for (let i = str.length - 1; i >= 0; i--) {
      // Check if the current character is a space or if we've reached the beginning of the string
      if (str[i] === ' ' || i === 0) {
        // If the current character is not the first character
        if (i !== 0)
          // Add the substring from (i+1) to (count_letters-1) to the new_string, followed by a space
          new_string += str.substr(i + 1, count_letters - 1) + ' ';
        else
          // Add the entire word (including the first character) to the new_string
          new_string += str.substr(i, count_letters);
  
        // Output the current state of the new_string
        console.log(new_string);
  
        // Reset the count of letters for the next word
        count_letters = 1;
      } else {
        // If the current character is not a space, increment the count of letters
        count_letters++;
      }
    }
  
    // Output the final state of the new_string
    console.log(new_string);
  
    // Return the reversed words as a single string
    return new_string;
  }
  