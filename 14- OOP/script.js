"use strict";
/*
// Constructor Functions

const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
// Creates a new empty object. {}
// Sets the this keyword inside the constructor function to refer to the newly created object. this = {}
// Adds properties and methods to the object using this. {} linked to prototype
// Returns the newly created object. fxn returns {}
const jonas = new Person("Ifeanyi", 1999);
console.log(jonas);
// Objects from class are instances

// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Jack", 1975);

// console.log(jonas instanceof Person);
Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();
////////////////////////////////////
// Prototype
// Properties and methods added to the prototype are shared among all instances created from that constructor.

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototyeOfLinkedObjects

// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));
///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);


// CODING CHALLENGE
const Car = function (make, speed) {
  // instances
  this.make = make;
  this.speed = speed;
};
// Methods
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is accelerating. New speed:${this.speed} km/h`);
};
// Methods
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is braking. New speed:${this.speed} km/h`);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// Displaying default
console.log(`DATA1 ${car1.make} going at ${car1.speed} km/hr`);
console.log(`DATA2 ${car2.make} going at ${car2.speed} km/hr`);
car1.accelerate();
car1.accelerate();

car2.brake();
car2.brake();


// ES6 classes

class PersonCl {
  // The constructor method is used to initialize object properties when an instance of the class is created.

  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.fullName}`);
  }
  get() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log("Hey There 🙌");
    console.log(this);
  }
}
// Instances are created using new keyword...
const jessica = new PersonCl("Jessica Davies", 1999);

console.log(jessica);
jessica.calcAge();
jessica.greet();

console.log(jessica.__proto__ === PersonCl.prototype);

// Classes are not hoisted
// Classes are first class citizens
// Classes are executed in strict mode

// Setters and getters
const walter = new PersonCl("Walter White", 1997);
// PersonCl.hey();

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

// CODING CHALLENGE 2
class CarCl {
  constructor(make, speed) {
    // instances
    this.make = make;
    this.speed = speed;
  }

  // Methods
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is accelerating. New speed:${this.speed} km/h`);
  }
  // Methods
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is braking. New speed:${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// Displaying default
const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  // Instances
  this.firstName = firstName;
  this.birthYear = birthYear;
};
// Method
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Constructor Fxn for creating student Object
const Student = function (firstName, birthYear, course) {
  // Call the Person constructor to initialize common properties
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype for inheritance...............
Student.prototype = Object.create(Person.prototype);
// Method
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// instance of student..
const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

// Restoring the constructor property to point back to student
Student.prototype.constructor = Student;

// Inspecting the constructor property
console.dir(Student.prototype.constructor);

// Coding Challenge 3

const Car = function (make, speed) {
  // instances
  this.make = make;
  this.speed = speed;
};
// Methods
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is accelerating. New speed:${this.speed} km/h`);
};
// Methods
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is braking. New speed:${this.speed} km/h`);
};

// EV
// EV is a constructor function for creating objects representing electric vehicles (EVs).
// It takes parameters make, speed, and charge, and initializes the corresponding properties using Car.call(this, make, speed) to reuse the initialization logic from the Car constructor.;
const EV = function (make, speed, charge) {
  // Initializing common ppts of Car
  Car.call(this, make, speed);
  this.charge = charge;
};

// linking prototypes for Inheritance
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
// Polymorphism in place, overwriting parent method...
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}. `
  );
};
// Creating Instance of EV
const tesla = new EV("Tesla", 120, 22);

// Using Method from both CAR and EV, while Observing Polymorphism
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

*/

class PersonCl {
  // The constructor method is used to initialize object properties when an instance of the class is created.

  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.fullName}`);
  }
  get() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
    // set fullName is a setter method that checks if the provided name is a full name (contains a space) before setting the _fullName property. If not, it shows an alert.
  }
  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log("Hey There 🙌");
    console.log(this);
    // static hey is a static method, meaning it is called on the class itself, not on instances of the class. It logs a greeting and the value of this (which refers to the class itself).
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      ` I'm ${
        2023 - this.birthYear
      } years old, but as a student i feel more like ${
        2023 - this.birthYear + 10
      } year old!`
    );
  }
}
// Creating and using instances
const martha = new StudentCl("Martha Elsie", 2012, "Computer Science");
martha.introduce();
martha.calcAge();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
// 18>2mins
