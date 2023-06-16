// Our counter prototype is broken. Can you spot, what's wrong here?

// my solution
class Counter {
    constructor() {
    this.value = 0;
    }
  }
  
  Counter.prototype.increase = function() {
    this.value++;
  };
  
  Counter.prototype.getValue = function() {
    return this.value;
  };
  
  Counter.prototype.reset = function() {
    this.value = 0;
  };

//   other solutions
function Counter() {
    this.value = 0;
  }
  
  Counter.prototype = {
    increase : function(){this.value++;},
    getValue : function(){ return this.value;},
    reset : function(){this.value = 0;}
  };