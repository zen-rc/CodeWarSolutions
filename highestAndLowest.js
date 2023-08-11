// //INSTRUCTIONS
    // In this little assignment you are given a string of space separated numbers,
    // and have to return the highest and lowest number.


// PREP
    // parameters- a single string of numbers seperated by a space
    // returning- two number with a single space in descending order
    // example- highAndLow("1 2 3 4 5");  // return "5 1"

//PSUEDO CODE EXPLANATION
    // split the string(' ')
    // sort array in descending
    // return first and last index
    // return `${arr[0]} ${arr[arr.length - 1]} 

//MY SOLUTION
function highAndLow(numbers){
  
    let arr = numbers.split(' ').sort((a, b) => (b - a));
      
     return `${arr[0]} ${arr[arr.length - 1]}`
}

//1

//2

//3

//4

//5

//6 

//7

//8

//9

//10