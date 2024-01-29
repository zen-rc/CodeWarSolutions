// INSTRUCTIONS
    // Given an array (arr) as an argument complete the function countSmileys
    // that should return the total number of smiling faces.
    // Rules for a smiling face:
    // Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    // A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    // Every smiling face must have a smiling mouth that should be marked with either ) or D
    
// PREP

// PSUEDO CODE

// first solution
function countSmileys(arr) {
    let total = 0;
    let eyes = [':', ';'];
    let noses = ['-', '~'];
    let smiles = [')', 'D'];
    
    arr.forEach(smiley => {
      let eye = smiley[0];
      let smile = smiley[smiley.length - 1];
      let validSmile = eyes.includes(eye) && smiles.includes(smile)
      
      if (smiley.length === 3 && validSmile && noses.includes(smiley[1])) {
        console.log('nose detected');
        total += 1;
      } else if (validSmile) {
        console.log('total increased');
        total += 1;
      }
    });
  
    return total;
  }

// second solution
function countSmileys(arr) {
    let total = 0;
    let eyes = [':', ';'];
    let noses = ['-', '~'];
    let smiles = [')', 'D'];
  
    arr.forEach(smiley => {
      let eye = smiley[0];
      let smile = smiley[smiley.length - 1];
      let nose = smiley.length === 3 ? smiley[1] : null; // Changed: Using a ternary operator for nose
  
      if (eyes.includes(eye) && smiles.includes(smile)) {
        // Combined conditions for a valid smiley
        if (smiley.length === 2 || (smiley.length === 3 && noses.includes(nose))) {
          total += 1;
        }
      }
    });
  
    return total;
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

