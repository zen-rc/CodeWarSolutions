// INSTRUCTIONS
    // There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// PREP
    // Examples
    // mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
    // mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
    // mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
    // mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

// PSUEDO CODE


// MY SOLUTION
function mango(quantity, price){
    let quan = []
//     remember that there are small differences between i = 0 and i = 1
    for(let i = 1; i <= quantity; i++) {
      quan.push(i)
    }
   let mangoes = quan.filter((i) => i % 3 !== 0) //needs to be a true statement to remain in array
   return price * (mangoes.length)
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
// Jeff solution 

    // subtract free mangoes
    // figure out how many are free (how many are divisible by 3)
    // multiply paid mangoes by price

function mango(quantity, price){
    return (quantity - Math.floor(quantity / 3)) * price
    }

// solution 1
function mango(quantity, price){
    return (quantity - ~~(quantity / 3)) * price
}