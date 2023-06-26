// Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.
// If the user tries to guess more than the limit, the function should throw an error.
// If the user guess is right it should return true.
// If the user guess is wrong it should return false and lose a life.
// Can you finish the game so all the rules are met?

// create a conditional that checks if guess is right or wrong
// if right, true. if wrong && lives == 0 (error)
// if wrong, return false
// -1 from lives every time a wrong guess is made
// number is the CORRECT number that should be guessed
// n is the guess the user is making

class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
       if(this.lives == 0) { //order matters
        throw new Error('already dead')
        } else if(n === this.number) {
        return true
      } else {
        this.lives= this.lives - 1
        return false;
        }
    }
  }
  

  class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if (!this.lives) throw Error
      this.lives--
      return n === this.number
    }
  }

  class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if (this.lives < 1) throw 'already dead';
      return (this.number === n || !(this.lives--));
    }
  }