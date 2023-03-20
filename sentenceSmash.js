//INSTRUCTIONS
//


//PSUEDO CODE EXPLANATION
//return empty string for empty array
//return one word for one item in array
//create sentence variable
//create loop for adding words to sentence

//MY SOLUTION
function smash(words) {
    
    if(words.length === 0) {
        return ''
    }
   
    if(words.length === 1) {
        return words[0]
    }

    let sentence = ' '
    for(let i = 0; i < words.length; i++) {
        sentence = sentence + words[i] + ' '
    }
    return sentence.trim()
}


//1

// const words = ['the', 'rabbit', 'is', 'the', 'hare', 'after', 'all']
function smash(words) {
    if(words.length === 0){
        return ''
    }
    if(words.length === 1){
        return words[0]
    }
    let sentence = ' '
    for(let i = 0; i < words.length; i++) {
        sentence = sentence + words[i] + ' '
    }

    return sentence.trim()
}

//2
function smash(words) {
    if(words.length === 0) {
        return ' '
    }
    if(words.length === 1) {
        return words[0]
    }
    let sentence = ' '
    for(let i = 0; i < words.length; i++) {
        sentece = sentence + words[i] + ' '
    }
    return sentence.trim()
}

//3
function smash(words) {
    if(words.length === 0) {
        return ''
    }
    if(words.length === 1) {
        return words[0]
    }
    let sentence = ' '
    for(let i = 0; i < words.length; i++) {
        sentence = sentence + words[i] + ' '
    }
    return sentence.trim()
}

//4
function smash(words) {
    if(words.length === 0){
        return ''
    }
    if(words.length === 1) {
        return words[0]
    }
    let sentence = ' '
    for(let i = 0; i < words.length; i++) {
        sentence = sentence + words[i] + ' '
    }
    return sentence.trim()
}

//5
function smash(words) {
    if(words.length === 0) {
        return ''
    }
    if(words.length === 1) {
        return words[0]
    }
    let sentence = ' '
    for(i = 0; i < words.length; i++) {
        sentence = sentence + words[i] + ' '
    }
    return sentence.trim()
}

//6
function smash(words) {
    if(words.length === 0) {
        return ''
    }
    if(words.length === 1) {
        return words[0]
    }
    let sentence = ' '
    for(let i = 0; i < words.length; i++) {
        sentence = sentence + words[i] + ' '
    }
    return sentence.trim()
}
//7
function smash(words) {
    if(words.length === 0){
        return ''
    }
    if(words.length === 1){
        return words[0]
    }
    let sentence = ' '
    for(i = 0; i < words.length; i++) {
        sentence = sentence + words[i] + ' '
    }
    return sentence.trim()
}
//8
function smash(words) {
    if(words.length === 0){
        return ''
    }
    if(words.length === 1) {
        return words[0]
    }
    let sentence = ' '
    for(i = 0; i < words.length; i++){
        sentence = sentence + words[i] + ' '
    }
    return sentence.trim()
}
//9
function smash(words) {
    if(words.length === 0) {
        return ''
    }
    if(words.length === 1) {
        return words[0]
    }
    let sentence = ' '
    for(i = 0; i < words.length; i++) {
        sentence = sentence + words[i] + ' '
    }
    return sentence.trim()
}

//10
function smash(words) {
    if(words.length === 0){
        return ' '
    }
    if(words.length === 1){
        return words[0]
    }
    let sentence = ' '
    for(i = 0; i < words.length; i++){
        sentence = sentence + words[i] + ' '
    }
    return sentence.trim()
}

//OTHER SOLUTIONS

// function smash (words) {
//     return words.join(' ')
// }