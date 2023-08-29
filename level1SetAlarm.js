// INSTRUCTIONS
    // Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. 
    // The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever 
    // you are on vacation.
    // The function should return true if you are employed and not on vacation (because these are the circumstances under 
    // which you need to set an alarm). It should return false otherwise. Examples:

// PREP
    // employed | vacation 
    // true     | true     => false
    // true     | false    => true
    // false    | true     => false
    // false    | false    => false


// PSUEDO CODE
    // conditional if vacation is true, return false
    // conditional if employed is true return true

// MY SOLUTION
function setAlarm(employed, vacation){
  if(employed !== vacation && employed == true) {
    return true
  } else {
    return false
  }
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

// solution 1
function setAlarm(employed, vacation){
    return employed && !vacation ? true : false
   }
   

//    solution 2
const setAlarm = (employed, vacation) => employed && !vacation;