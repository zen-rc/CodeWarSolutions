// INSTRUCTIONS
    // The Western Suburbs Croquet Club has two categories of membership, 
    // Senior and Open. They would like your help with an application form 
    // that will tell prospective members which category they will be placed.
    // To be a senior, a member must be at least 55 years old and have a 
    // handicap greater than 7. In this croquet club, handicaps range from
    //  -2 to +26; the better the player the lower the handicap.
    // 
    //  Input
    // Input will consist of a list of pairs. Each pair contains information 
    // for a single potential member. Information consists of an integer for 
    // the person's age and an integer for the person's handicap.
    // Output
    // Output will consist of a list of string values (in Haskell and 
    // C: Open or Senior) stating whether the respective member is to be 
    // 
    // placed in the senior or open category.
    // Example
    // input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
    // output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// PREP
    // passing an array with subarray
    // returning an array of strings "Open" and "Senior"
    // Example:
        // data =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
        // output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// PSUEDO CODE
    // input[2][1]
    // loop through data
    // input[i][0] >= 55 && input[i][1] > 7 ? "Senior" : "Open"

// MY SOLUTION
function openOrSenior(data) {
    let member = data.map(subArray => subArray[0] >= 55 && subArray[1] > 7 ? "Senior" : "Open")
    
    return member
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
    function openOrSenior(data){
        return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
      }

    //solution 2
    const Category = {
        Open: 'Open',
        Senior: 'Senior',
      };
      
      function openOrSenior(data){
       return data.map(([age, handicap]) => {
          if (age >= 55 && handicap > 7) {
            return Category.Senior;
          }
      
          return Category.Open;
       });
      }