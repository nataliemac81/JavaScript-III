/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global or window binding = The value of 'this' will be the window object.
* 2. Implicit binding = When a function is called, the object to the left of the dot is 'this'
* 3. Explicit binding = When using the call, apply or bind methods, 'this' is explicitly defined.
* 4. New binding = When using a constructor function, 'this' refers to the specific instance of the created object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
	console.log(this);
  return name;
}

sayName('Natalie');

// Principle 2

// code example for Implicit Binding
const myObj = {
	greeting: 'Hey',
	sayHey: function(name) {
		console.log(`${this.greeting} my name is ${name}`);
		console.log(this);
	}
};

myObj.sayHey('Nat');


// Principle 3

// code example for Explicit Binding

const speakName = function() {
	console.log(`My name is ${this.name}`);
};

const nat = {
	name: 'Natalie',
	city: 'Chicago' 
};

speakName.call(nat);



// Principle 4

// code example for New Binding

const Animal = function(name, type, sound) {
	this.name = name;
	this.type = type;
	this.sound = sound;
};

const elephant = new Animal('Babar', 'Elephant', 'Toot!!');