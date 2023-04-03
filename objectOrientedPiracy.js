//INSTRUCTIONS
    // You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.
    // Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!
    // Add the method
    // isWorthIt
    // to decide if the ship is worthy to loot. For example:
    // titanic.isWorthIt() // return false

//PSUEDO CODE EXPLANATION


//MY SOLUTION
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => {
      return (draft - (crew * 1.5)) > 20;
    }
  }


//1
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => {
        return (draft - (crew * 1.5)) > 20
    }
}

//2
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => {
        return (draft - (crew * 1.5) > 20);
    }
}
//3
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => {
        return (draft - (crew * 1.5) > 20);
    }
}
//4
function Ship(draft, crew) {
    this.crew = crew;
    this.draft = draft;
    this.isWorthIt = () => {
        return (draft - (crew * 1.5) > 20);
    }
}
//5
function Ship(draft, crew){
    this.crew = crew;
    this.draft = draft;
    this.isWorthIt = () => {
        return (draft (crew * 1.5) > 20)
    }
}
//6
function Ship(draft,crew){
    this.crew = crew;
    this.draft = draft;
    this.isWorthIt = () => {
        return (draft (crew * 1.5) > 20)
    }
}
//7
function Ship(draft,crew){
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => {
        return (draft (crew * 1.5) > 20)
    }
}
//8
function Ship(draft,crew){
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => {
        return (draft (crew * 1.5) > 20)
    }
}
//9
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => {
        return (draft (crew * 1.5) > 20)
    }
}
//10
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => {
        return (draft (crew * 1.5) > 20)
    }
}
//OTHER SOLUTIONS