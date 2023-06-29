let arr = [1, 2, 3]

arr.forEach(e => console.log(e))
// the parameter is a function, runs function on each element. calls function for you and increments up by each element
// just returns each element.

let newArr = arr.map(e => e + 1)
// map adds an extra step, takes what you return and puts it in new array. (when )

console.log(newArr)