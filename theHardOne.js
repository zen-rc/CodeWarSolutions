// CHALLENGE 5: MAX CHARACTER
    // Return the character that is most common
    // in a string
    // ex. maxCharacter('javascript') == 'a'

// technique 1
function maxCharacter(str) {
    const CharMap = {}
    let maxNum = 0
    let maxChar = ''

    str.split('').forEach(function(char) {
        if(charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    })
    console.log(charMap)

    for(let char in charMap) {
        debugger
        if(charMap[char] > maxNum) {
            maxNum = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}


