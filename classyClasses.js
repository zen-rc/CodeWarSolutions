// accepts string (name) and number (age)
// create methods to access the properties after the constructor
// info makes it so that name and age is required for it to run

class Person {
    //   name; //properties declared here
    //   age;
    
      
      constructor(name, age) {

        this.name = name ;
        this.age = age ; //assigning age on this line
        this.info = `${name}s age is ${age}`
      }
      
      getName() {
        return this.name
      }
      
      getAge(){
        return this.age
      }
      
      getInfo(){
        return info
      }
    }


    //other solution
    // solution 1
    class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
        //example of encapsulation
        get info() {
          return this.getInfo();
        }
      
        getInfo() {
          return `${this.name}s age is ${this.age}`;
        }
      }
    //   solution 2
      class Person {
        constructor(name, age) {
          this.info = name + 's age is ' + age;
        }
      
        getInfo() {
          return;
        }
      } //why does this work?
      
    //   solution 3
    class Person {
        constructor(name, age) {
          this.name = name
          this.age = age
        }
        
        get info() {
          return `${this.name}s age is ${this.age}`
        }
      }