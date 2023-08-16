
//INSTRUCTIONS
    // In this kata you will create a function that takes a list of non-negative integers
    //  and strings and returns a new list with the strings filtered out.

// PREP WORK
    // an array is being passed through with elements that are numbers, and strings
    // we need to return a NEW array with just numbers (no strings)
    // example: filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//PSUEDO CODE EXPLANATION
    // create a new array
    // could use the filter method? and easy one
    // create a loop?
    // need a conditonal that checks if element is number or string
    // element is pushed to new array if number, ignored if string
    // return the array

//MY SOLUTION
function filterList(l) {
    let arr = []
    
    for (let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            arr.push(l[i])
        }
    }
    return arr
  }

  //1
function filterList(l)  {
    let arr = []

    for(let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            arr.push(l[i])
        }
    }
    return arr
}
  //2
function filterList(l) {
    let arr = []

    for(let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            arr.push(l[i])
        }
    }
    return arr
}
  //3
function filterList(l) {
    let arr = []

    for(let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            arr.push(l[i])
        }
    }
    return arr
}
  //4
function filterList(l) {
    let arr = []

    for(let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            arr.push(l[i])
        }
    }
    return arr
}
  //5
  function filterList(l) {
    let arr = []

    for(let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            arr.push(l[i])
        }
    }
    return arr
  }
  //6
  function filterList(l) {
    let arr = []

    for(let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            arr.push(l[i])
        }
    }
    return arr
  }
  //7
function filterList(l) {
    let arr = []

    for(let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            arr.push(l[i])
        }
    }
    return arr
}
  //8
  function filterList(l) {
    let arr = []

    for(let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            arr.push(l[i])

        }
    }
    return arr
  }
  //9
  function filterList(l) {
    let arr = []

    for(let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            arr.push(l[i])
        }
    }
    return arr
  }
  //10
  
  //OTHER SOLUTIONS
  function filter_list(l) {
    return l.filter(v => typeof v == "number")
   }