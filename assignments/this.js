/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding
* 'this' points at the window/console object when in the global scope.
*
* 2. Implicit Binding
* Whenever a function is called by a preceding dot, the object before that dot is 'this'.
*
* 3. New Binding
* Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
*
* 4. Explicit binding
* Whenever JavaScript’s call or apply method is used, this is explicitly defined.


* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

console.log(this);   // in the global scope

function sayName(name) {    // function defined in the gloabl scope
    console.log(this);
    return name;
  }

 console.log(sayName("Oliver"));

// Principle 2
// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(this);
      console.log(`${this.greeting} my name is ${name}`);
    }
  };

 myObj.sayHello('Ryan');
 
  
//  const sayNameFunc = obj => {
//     obj.sayName = function() {
//       console.log(`Hello my name is ${this.name}`);
//       console.log(this);
//     };
//   };
  
// const me = { name: 'Ryan' };
// const you = { name: 'Freddy' };
// sayNameFunc(me);
// sayNameFunc(you);


 
// Principle 3
// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
//   newman.speak();


// Principle 4
// code example for Explicit Binding

jerry.speak.call(newman);
// newman.speak.apply(jerry);

