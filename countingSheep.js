//INSTRUCTIONS
//Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).


//PSUEDO CODE EXPLANATION
    //create array for real sheep
    //go through existing array to sort present sheep
    //verify sheep is present
    //add sheep to new Array
    //count sheep

//MY SOLUTION
function countSheeps(arrayOfSheep) {
    
    const newArray = []
    arrayOfSheep.forEach(sheep => {
      if(sheep) {
        newArray.push(sheep)
      }
    })
    return newArray.length
}

//OTHER SOLUTIONS
function countSheeps(arr) {
  return arr.filter(Boolean).length
}