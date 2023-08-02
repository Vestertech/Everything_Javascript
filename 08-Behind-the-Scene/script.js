"use-strict";
// Javascript is a high-level, prototype-based object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.

// Javascript is a high-level language because it abstracts away many of the complex details of the machine. It is also a low-level language because it can access the memory and deal with the machine directly.

// deconstructing the definition of Javascript:
// high-level: abstracts away many of the complex details of the machine
// garbage-collected: automatically removes old, unused objects from the computer memory
// interpreted or just-in-time compiled: the code is executed by another program that transforms the code into something that the machine can understand (0 & 1) abstracting away the need for us to deal with the machine directly
// multi-paradigm: a paradigm is an approach and mindset of structuring code, which will direct your coding style and technique. Javascript is multi-paradigm because it can use different approaches to solve a problem. (procedural programming, object-oriented programming, functional programming.) paradigms are classified into two categories: imperative and declarative. imperative programming is when we tell the computer what to do and how to do it. declarative programming is when we tell the computer what we want to be done and the computer will figure out how to do it.

// prototype-based object-oriented: object-oriented programming is a programming paradigm based on the concept of objects. objects may contain data (properties) and code (methods). Javascript is prototype-based because inheritance works by using something called prototypes. prototypes are like blueprints. objects can have prototypes and inherit properties and methods from them. Javascript is object-oriented because it uses objects and prototypes to solve complex problems in a simple way.
// first-class functions: functions are simply values. functions are treated as regular variables. we can pass functions into other functions, and return functions from functions. functions are first-class citizens in Javascript.
// dynamic: dynamically typed language. we don't tell the engine what type of data a variable holds, it figures it out while the code is running. variables can hold different types of values because it is all figured out during execution.
// single-threaded: concurrency model. one command is executed at a time. Javascript is synchronous. Javascript has a single call stack which is a data structure that records where in the program we are. it is like a list of functions that have to be executed. the topmost element of the stack is the function that is currently being executed. the call stack is synchronous because only one command is executed at a time. the call stack is also called the execution context. the call stack is a data structure that records where in the program we are. it is like a list of functions that have to be executed. the topmost element of the stack is the function that is currently being executed. the call stack is synchronous because only one command is executed at a time. the call stack is also called the execution context. the call stack is a data structure that records where in the program we are. it is like a list of functions that have to be executed. the topmost element of the stack is the function that is currently being executed. the call stack is synchronous because only one command is executed at a time. the call stack is also called the execution context.
// Non-blocking event loop. a mechanism that allows the program to continue running while an asynchronous task is being executed. it is a part of the Javascript concurrency model. it is a loop that checks if the call stack is empty. if it is empty, it takes a callback from the callback queue and puts it on the call stack, which effectively runs the callback. the event loop is non-blocking because it never blocks the execution of the code. it is a loop that checks if the call stack is empty. if it is empty, it takes a callback from the callback queue and puts it on the call stack, which effectively runs the callback. the event loop is non-blocking because it never blocks the execution of the code. it is a loop that checks if the call stack is empty. if it is empty, it takes a callback from the callback queue and puts it on the call stack, which effectively runs the callback. the event loop is non-blocking because it never blocks the execution of the code. it is a loop that checks if the call stack is empty. if it is empty, it takes a callback from the callback queue and puts it on the call stack, which effectively runs the callback.

// Javascript engine and runtime environment

// scoping in practice

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // creating new variable with same name as outer scope's variable
//       const firstName = "Steven";
//       // reassigning outer scope's variable
//       output = "NEW OUTPUT!";
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // add(2, 3);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// // Hoisting and TDZ in practice

// // variables
// // console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "Sylvester";
// let job = "Software Engineer";
// const year = 1991;

// // functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// // The this keyword in practice

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const sylvester = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// sylvester.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = sylvester.calcAge;
// matilda.calcAge();

// const f = sylvester.calcAge;
// f();

// Regular functions vs. arrow functions

// var firstName = "Matilda";

// const sylvester = {
//   firstName: "Sylvester",
//   year: 1999,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
// };

// sylvester.calcAge();

// // arguments keyword

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// Primitives vs. Objects (Primitive vs. Reference Types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Sylvester",
  age: 24,
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me:", me);

// Primitive types
let lastName = "Eziagor";
let oldLastName = lastName;
lastName = "Oshodin";
console.log(lastName, oldLastName);

// Reference types
const Ada = {
  firstName: "Ada",
  lastName: "Eziagor",
  age: 25,
};

const marriedAda = Ada;
marriedAda.lastName = "Oshodin";
console.log("Before marriage:", Ada);
console.log("After marriage:", marriedAda);

// Copying objects
const ada2 = {
  firstName: "Ada",
  lastName: "Eziagor",
  age: 25,
  family: ["Alice", "Bob"],
};

const adaCopy = Object.assign({}, ada2);
adaCopy.lastName = "Oshodin";
adaCopy.family.push("Abiye");
adaCopy.family.push("Chidinma");

console.log("Before marriage:", ada2);
console.log("After marriage:", adaCopy);
