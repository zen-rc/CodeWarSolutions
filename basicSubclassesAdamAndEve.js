// INSTRUCTIONS
// According to the creation myths of the Abrahamic religions,
// Adam and Eve were the first Humans to wander the Earth.
// You have to do God's job. The creation method must return an array of
// length 2 containing objects (representing Adam and Eve). The first object in the array 
// should be an instance of the class Man. The second should be an instance of the class Woman.
// Both objects have to be subclasses of Human. Your job is to implement
// the Human, Man and Woman classes.
// PREP

// PSUEDO CODE

// MY SOLUTION
class God{
    static create(){
      let man = new Man()
    //   ^^ this is creating an instance of the class Man
      let woman = new Woman()
    //   ^^ The parentheses are essential for instantiating objects from a class in Javascript
      return [man, woman]
    }
  }
  class Human{}
  class Man extends Human {}
//   ^^^ this is creating a subclass of Man in Human.
  class Woman extends Human {}

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
// solution 1 (CORRECT way to write this solution. In the right order.)
class Human {}

class Man extends Human {}

class Woman extends Human {}

class God {
  static create() {
    // Create instances of Man and Woman
    const man = new Man();
    const woman = new Woman();

    // Return an array containing both instances
    return [man, woman];
  }
}

// 1
class Human {}

class Man extends Human {}
class Woman extends Human {}

class God {
    static create() {

        const man = new Man()
        const woman = new Woman()

return [man, woman]
    }
}
// 2
class Human{}

class Man extends Human {}
class Woman extends Human {}

class God {
    static create() {
        const man = new Man()
        const woman = new Woman()

        return [man, woman]
    }
}
// 3
class Human{}

class Man extends Human {}
class Woman extends Human {}

class God {
    static create() {
        const man = new Man()
        const woman = new Woman()

        return [man, woman]
    }
}
// 4
class Human{}

class Man extends Human{}
class Woman extends Human{}

class God{
    static create() {
        const man = new Man()
        const woman = new Woman()

        return [man, woman]
    }
}
// 5
class Human {}

class Man extends Human{}
class Woman extends Human{}

class God {
    static create() {
        const man = new Man()
        const woman = new Woman()

        return [man, woman]
    }
}
// 6

// 7

// 8

// 9

// 10



// solution 2

class Human {}
class Man extends Human {}
class Woman extends Human {}

class God{
/**
 * @returns Human[]
 */
  static create(){
    return [
      new Man,
      new Woman
    ];
  }
}
