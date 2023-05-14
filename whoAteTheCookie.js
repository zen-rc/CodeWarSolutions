// instructions
    // For this problem you must create a program that says who ate the last cookie.
    // If the input is a string then "Zach" ate the cookie. 
    // If the input is a float or an int then "Monica" ate the cookie. 
    // If the input is anything else "the dog" ate the cookie. 
    // The way to return the statement is: "Who ate the last cookie? It was (name)!"

// psuedo code
     // create condiional, use typeof for each test
    // if statement to check if value is string
    // return Zach
    // if statement to check if value is string
    // return Monica
    // else statement
    //   return dog

// my solutions
const cookie = x => {
    if( typeof x === 'string') {
      return "Who ate the last cookie? It was Zach!"
    } else if( typeof x === 'number') {
      return "Who ate the last cookie? It was Monica!"
    } else {
      return "Who ate the last cookie? It was the dog!"
    }
}
// other solutions
const cookie = x => {
    const t = typeof x
    const who = t === "string" ? 'Zach' : t === "number" ? 'Monica' : 'the dog'
    return `Who ate the last cookie? It was ${who}!`
  }