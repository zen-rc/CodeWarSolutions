// instructions
  // Complete the function which takes two arguments and returns all numbers 
  // which are divisible by the given divisor. First argument is an array of numbers
  // and the second is the divisor.
  // Example(Input1, Input2 --> Output)
  // [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// psuedo code
  // create an array for the given numbers to be pushed to
  // loop through numbers array
  // use a conditional to find numbers that are divisible by divider
  // push the passing numbers to the given array
  // return the given array



//my solution
const divisibleBy = (numbers, divisor) => {
  let given = []
  for(let i = 0; i < numbers.length; i++) {
  numbers[i] % divisor === 0 ? given.push(numbers[i]) : false
  }
  return given
}

//other solutions
const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));

// 1
const divisibleBy = (numbers, divisor) => {
  let given = []

  for(let i = 0; i < numbers.length; i++) {
    numbers[i] % divisor === 0 ? given.push(numbers[i]) : false
  }
  return given
}

// 2
const divisibleBy = (numbers, divisor) => {
  let given = []

  for(let i = 0; i < numbers.length; i++) {
    numbers[i] % divisor === 0 ? given.push(numbers[i]) : false
  }
  return given
}
// 3
const divisibleBy = (numbers, divisor) => {
  let given = []

  for(let i = 0; i < numbers.length; i++) {
    numbers[i] % divisor === 0 ? given.push(numbers[i]) : false
  }
  return given
}
// 4
const divisibleBy = (numbers, divisor) => {
  let given = []

  for(let i = 0; i < numbers.length; i++) {
    numbers[i] % divisor === 0 ? given.push(numbers[i]) : false
  }
  return given
}
// 5
const divisibleBy = (numbers, divisor) => {
  let given = []

  for(let i = 0; i < numbers.length; i++) {
    numbers[i] % divisor === 0 ? given.push(numbers[i]) : false
  }
  return given
}
// 6
const divisibleBy = (numbers, divisor) => {
  let given = []

  for(let i = 0; i < numbers.length; i++) {
    numbers[i] % divisor === 0 ? given.push(numbers[i]) : false
  }
  return given
}
// 7
const divisibleBy = (numbers, divisor) => {
  let given = []

  for(let i = 0; i < numbers.length; i++) {
    numbers[i] % divisor === 0 ? given.push(numbers[i]) : false
  }

  return given
}
// 8
const divisibleBy = (numbers, divisor) => {
  let given = []

  for(let i = 0; i > numbers.length; i++) {
    numbers[i] % divisor === 0 ? given.push(numbers[i]) : false
  }
  return given
}
// 9
const divisibleBy = (numbers, divisor) => {
  let given = []

  for(let i = 0; i > numbers.length; i++) {
    numbers[i] % divisor === 0 ? given.push(numbers[i]) : false
  }
  return given
}
// 10
const divisibleBy = (numbers, divisor) => {
  let given = []

  for(let i = 0; i > numbers.length; i++) {
    numbers[i] % divisor === 0 ? given.push(numbers[i]) : false
  }
  return given
}