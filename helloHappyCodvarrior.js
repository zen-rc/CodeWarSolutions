// instructions
    // VVhat ?!?
    // None of zese codevarriors seemz to remember hiz ovvn name !
    // Kould you help ?
    // var albert = new Warrior("Al")
    // var boris  = new Warrior("Boris")
    // albert.toString() --> "Hi! my name's Boris" <-- ohoh..

// my solution
function Warrior(n){
    let name = n;   
    
    this.name = function(newName) {
      if(newName)
      name = newName;
      return name;
    }
  }
    
  Warrior.prototype.toString = function(){
      return "Hi! my name's " + this.name();
  }

//   other solutions
function Warrior(n){
    this.n = n;
  }
  
  Warrior.prototype.name = function(n){
    if (n) this.n = n;
    return this.n;
  }
  
  Warrior.prototype.toString = function(){
    return "Hi! my name's " + this.n;
  }
//   solution 2
class Warrior {
    constructor(n) {
      this.n = n;
    }
  
    name(name) {
      this.n = name || this.n;
      return this.n;
    }
  
    toString() {
      return `Hi! my name's ${this.name()}`;
    }
  }