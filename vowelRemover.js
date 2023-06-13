// instructions
    // Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
    // Examples
    // "hello"     -->  "hll"
    // "codewars"  -->  "cdwrs"
    // "goodbye"   -->  "gdby"
    // "HELLO"     -->  "HELLO"
    // don't worry about uppercase vowels
    // y is not considered a vowel for this kata

// my solution
function shortcut (string) {
    const gibberish = string.replaceAll('a', '').replaceAll('e', '')
      .replaceAll('i', '').replaceAll('o', '').replaceAll('u', '')
    
    return gibberish
  }

// other solutions

    // 1
function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }
    // 2
function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
  }