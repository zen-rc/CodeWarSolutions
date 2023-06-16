// instructions
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"


// my solution
const rps = (p1, p2) => {
    if(p1 === 'scissors' && p2 === 'paper') {
      return 'Player 1 won!'
    } else if(p1 === 'rock' && p2 === 'scissors') {
      return 'Player 1 won!'
    } else if(p1 === 'paper' && p2 === 'rock') {
      return 'Player 1 won!'
    } else if(p2 === 'scissors' && p1 === 'paper') {
      return 'Player 2 won!'
    } else if(p2 === 'rock' && p1 === 'scissors') {
      return 'Player 2 won!'
    } else if(p2 === 'paper' && p1 === 'rock') {
      return 'Player 2 won!'
    } else if(p1 === 'rock' && p2 === 'rock') {
      return 'Draw!'
    } else if(p1 === 'paper' && p2 === 'paper') {
      return 'Draw!'
    } else if(p1 === 'scissors' && p2 === 'scissors') {
      return 'Draw!'
    }
  };

//   other solutions
    // 1
const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
    if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
    if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
    return 'Player 2 won!';
  };
    // 2
  const rps = (p1, p2) => {
    const rules = {
      'scissors': 'paper',
      'rock': 'scissors',
      'paper': 'rock'
    };
    return rules[p1] === p2 ? 'Player 1 won!' : p1 === p2 ? 'Draw!' : 'Player 2 won!';
  };
