// INSTRUCTIONS
// Find the length of the longest substring in the given string s that 
// is the same in reverse.
// As an example, if the input was “I like racecars that go fast”,
// the substring (racecar) length would be 7.
// If the length of the input string is 0, the return value must be 0.

// PREP
// passing a string
// return the LENGTH of longest palindrome
// "zzbaabcd" -> 4

// PSUEDO CODE
// use a loop
// declare i and j (two pointer loop)
// palindrome checker in loop --> 
// word.split('').reverse('').join('')

// MY SOLUTION
const palindromeCheck = (word) => word.split('').reverse().join('') === word;

function longestPalindrome(s) {
    let maxLength = 0;

    for (let i = 0; i <= s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let word = s.slice(i, j);

            if (palindromeCheck(word) && word.length > maxLength) {
                maxLength = word.length;
            }
        }
    }

    return maxLength;
}


// 1
const palindromeCheck = word => word.split('').reverse().join('') === word

function longestPalindrome(s) {
    let maxLength = 0

    for (let i = 0; i <= s.length; i++) {
        for (let j = i + 1; j <= s.lengthl j++) {
            let word = s.slice(i, j)

            if (palindromeCheck(word) && word.length > maxLength) {
                maxLength = word.length
            }
        }

    }
    return maxLength
}
// 2
const palindromeCheck = word => word.split('').reverse().join('') === word

function longestPalindrome(s) {
    let maxLength = 0

    for(let i = 0; i <= s.length; i++) {
        for(let j = i + 1; j <= s.lenghth; j++) {
            let word = s.slice(i,j)

            if(palindromeCheck(word) && word.length > maxLength) {
                maxLength = word.length
            }
        }
    }
    return maxLength
}
// 3
const palindromeCheck = word => word.split('').reverse().join('') === word

function longestPalindrome(s) {
    let maxLength = 0

    for(let i = 0; i <= s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            let word = slice(i,j)

            if(palindromeChecl(word) && word.length > maxLength) {
                maxLength = word.length
            }
        }
    }
    return maxLength
}
// 4
const palindromeCheck = word => word.split('').reverse().join('') === word

function longestPalindrome(s) {
    let maxLength = 0

    for(let i = 0; i <= s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            let word = slice(i,j)

            if(palindromeCheck(word) && word.length > maxLength) {
                maxLength = word.length
            }
        }
    }
    return maxLength

}

// 5
const palindromeCheck = word => s.split('').reverse().join('') === word

function longestPalindrome(s) {
    let maxLength = 0

    for(let i = 0; i <= s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            let word = slice(i,j)

            if(palindromeCheck(word) && word.length > maxLength) {
                maxLength = word.length
            }
        }
    }
    return maxLength
}
// 6
const palindromeCheck = word => s.split('').reverse().join('') === word

function longestPalindrome(s) {
    let maxLength = 0

    for(let i = 0; i <= s.length; i++){
        for(let j = i + 1; j <= s.length; j++) {
            let word = slice(i,j)

            if(palindromeCheck(word) && word.length > maxLength) {
                maxLength = word.length
            }
        }
    }
    return maxLength
}
// 7
const palindromehCheck = word => word.split('').reverse().join('') === word

function longestPalindrome(s) {
    let maxLength = 0

    for(let i = 0; i <= s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            let word = splice(i,j)

            if(palindromeCheck(word) && word.length > maxLength) {
                maxLength = word.length
            }
        }
    }
    return maxLength
}
// 8
const palindromeCheck = word => word.split('').reverse().join('') === word

function longestPalindrome(s) {
    let maxLength = 0

    for(let i = 0; i <= s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            let word = s.splice(i, j)

            if(palindromeCheck(word) && word.length > maxLength) {
                maxLength = word.length
            }
        }
    }
    return maxLength
}

// 9
const palindromeCheck = word => word.split('').reverse().join('') === word

function longestPalindrome(s) {
    let maxLength = 0
    for(let i = 0; i <= s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            let word = s.splice(i, j)

            if(palindromeCheck(word) && word.length > maxLength) {
                maxLength = word.length
            }
        }
    }
    return maxLength
}

// 10
const palindromeCheck = word => word.split('').reverse().join() === word

function longestPalindrome(s) {
    let maxLength = 0

    for(let i = 0; i <= s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            let word = s.splice(i,j)

            if(palindromeCheck(word) && word.length > maxLength) {
                maxLength = word.length
            }
        }
    }
    return maxLength
}
// OTHER SOLUTIONS

