// // INSTRUCTIONS
// // Take 2 strings s1 and s2 including only letters from a to z.
// // Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// // Examples:
// // a = "xyaabbbccccdefww"
// // b = "xxxxyyyyabklmopq"
// // longest(a, b) -> "abcdefklmopqwxy"
// // a = "abcdefghijklmnopqrstuvwxyz"
// // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// // PREP
// // passing two strings
// // return one string in alpahbetical order each leter only shows up once
// // a = "xyaabbbccccdefww"
// // b = "xxxxyyyyabklmopq"
// // longest(a, b) -> "abcdefklmopqwxy"


// // PSUEDO CODE
// // split string into array
// // use the sort method
// // filter out redudant letters using Set and .add()

// // const mySet1 = new Set();
// // mySet1.add(1); // Set(1) { 1 }

// // MY SOLUTION
// function longest(s1, s2) {
//     let sum = s1 + s2
//     let set1 = new Set()
    
//     sum.split('').sort().forEach(char => set1.add(char))
    
//     return [...set1].join('')
//   }

// // 1

// // 2

// // 3

// // 4

// // 5

// // 6

// // 7

// // 8

// // 9

// // 10

// // OTHER SOLUTIONS
//     // solution 1
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//     // solution 2
// function longest(s1, s2) {
//     return Array.from(new Set(s1 + s2)).sort().join('');
//   }


let s1 = "abdgshvdfjksdbvkjsdbvk"
let s2 = "skjvbsdjhbvskjbdskjvb"
function longest(s1, s2) {
    let str = new Set([...s1, ...s2]);

    console.log(...s1)
    return [...str].sort().join('');
    }

    longest(s1, s2)