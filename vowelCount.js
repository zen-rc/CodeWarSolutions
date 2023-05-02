//instructions
    // Return the number (count) of vowels in the given string.
    // We will consider a, e, i, o, u as vowels for this Kata (but not y).
    // The input string will only consist of lower case letters and/or spaces.

// my solution
function getCount(str) {
  let vowels = 0
  for(let char of str) {
    if( char ==='a' || char ==='e'|| char ==='i'|| char ==='o'|| char ==='u'){
      vowels += 1
    } 
  }
  return vowels
}

// other solutions
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }