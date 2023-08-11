"use script";

// Functions
/*
// Default Parameters;
const bookings = []; //create array to store bookings
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger // used to create an object and push into bookings array.
) {
  // ES5 way of setting default parameters
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000); // used to skip a parameter and use the default value

// How Passing Arguments Works: Value vs. Reference (ES6), Understanding how primitives and objects work is very important in JS

const flight = "LH234";
const sylvester = {
  name: "Sylvester Eziagor",
  passport: 234567890,
};

const checkIn = function (flightNum, passenger) {
  // flightNum = flight
  flightNum = "LH999"; // this does not change the flight variable because it is a primitive value
  passenger.name = "Mr. " + passenger.name; // this changes the name property of the sylvester object because it is a reference value

  if (passenger.passport === 234567890) {
    alert("Check in");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, sylvester);
console.log(flight);
console.log(sylvester);

// Is the same as doing...
// const flightNum = flight; // this is a copy of the flight variable
// const passenger = sylvester; // this is a reference to the sylvester object

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(sylvester);
checkIn(flight, sylvester); // this will return wrong passport because the passport number has changed javascript does not have passing by reference. its always passing by value

// First-Class and Higher-Order Functions
// first class citizens, implies that functions are just another type of value
// functions are just another type of object

// Higher-Order Functions, It receives another function as argument or returns a function as a result

//6- Functions accepting callback functions

// String transformations

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
}; // this function removes all spaces and converts the string to lowercase

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
}; // this function converts the first word to uppercase

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`); // fn is the callback function
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord); // Called the transformer function with the oneWord function as the callback function because Javascript called the transformer function for us.

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5); // this is a callback function because it is called by the event listener function
["Sylvester", "Eziagor", "Sly", "Sly Eziagor"].forEach(high5); // this is a callback function because it is called by the forEach function.



//7- Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}; //This creates a function that returns an inner function with a predefined greeting. This is called a closure.
// closure means having access to parents parameters even after the parent function has returned.;
const greeterHey = greet("Hey");
greeterHey("Sylvester");
greeterHey("Eziagor");

greet("Hello")("Sylvester"); // this is the same as calling the function with the variable

// Challenge
const greetArr = (greeting) => (names) => console.log(`${greeting} ${names}`);

greetArr(`Howfar`)(`Eziagor`);
greetArr(`Howfar`)(`Sylvester`);


// 8- The call and apply methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    ); // this is the same as the below code.

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); // this is the same as the above code
  },
};

lufthansa.book(239, "Sylvester Eziagor");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book; // this is a regular function call and not a method call. this keyword will point to undefined, so to fix this problem we use the call method.

// call method
// call method allows us to set the this keyword manually, and also allows us to pass in the arguments that we want to use in the function.

book.call(eurowings, 23, "Sarah Williams"); // this is the same as doing eurowings.book(23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper"); // this is the same as doing lufthansa.book(239, "Mary Cooper");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper"); // this is the same as doing swiss.book(583, "Mary Cooper"); but with the call method that allows us to use the book function on the swiss object.
console.log(swiss);

// Apply method
// the apply method does not receive a list of arguments after the this keyword, instead it takes an array of the arguments.
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

// We now use the call method with the spread operator instead of the apply method
book.call(swiss, ...flightData);

// Bind method
// the bind method does not immediately call the function, instead it returns a new function where the this keyword is bound.

const bookEW = book.bind(eurowings); // this is the same as doing book.call(eurowings, 23, "Sarah Williams");
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23); // this is called partial application, where we preset some of the parameters of the original function.
bookEW23("Sylvester Eziagor");
bookEW23("Martha Cooper"); // this is the same as doing book.call(eurowings, 23, "Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); // this keyword points to the button element
  this.planes++; // this keyword points to the lufthansa object
  console.log(this.planes);
};

// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane); // this will not work because the this keyword will point to the button element and not the lufthansa object

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); // this will work because the bind method will bind the this keyword to the lufthansa object

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // this is the same as doing addTax.call(null, 0.1, 200);

const VAT = addTax.bind(null, 0.23); // this is the same as doing addTax.bind(null, 0.23, value); null reps the this keyword.
// addVAT = (value) => value + value * 0.23;
console.log(VAT(100));
console.log(VAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const VAT2 = addTaxRate(0.23);
console.log(VAT2(100));
console.log(VAT2(23));


///////////////////////////////////////
// Coding Challenge #1


Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt("Your answer"));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get("correct") === answer));

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0), // this creates a new array with 4 elements and fills it with 0s
  registerNewAnswer: function () {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    ); // this is the same as doing question.get("question") and question.get("options")
    console.log(answer);

    // Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++; // this is the same as doing question.get("correct") === answer

    // console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },

  displayResults: function (type = "array") {
    if (type === "array") {
      // [5, 2, 3]
      console.log(this.answers);
    } else if (type === "string") {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll)); // this is the same as doing question.registerNewAnswer.bind(question)

poll.displayResults.call({ answers: [5, 2, 3] }, "string"); // this is the same as doing question.displayResults.call({answers: [5, 2, 3]}, "string"); and we do this because we need a different this keyword for this method.
// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]


///////////////////////////////////////
// Immediately Invoked Function Expressions IIFE;
// IIFE is a function that is only executed once and then disappears and is never called again.

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23; // this is private to this block
  var notPrivate = 46; // this is not private to this block and can be accessed outside of it
}

// console.log(isPrivate);
console.log(notPrivate);

///////////////////////////////////////
// Closures
// closures are not a feature that we explicitly use, but rather a side effect of something else.

const secureBooking = function () {
  let passengerCount = 0; // this is private to this function

  return function () {
    passengerCount++; // this is a closure
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking(); // this is a closure
booker();
booker();
booker();

// CLOSURE- A function always have access to the variable environment of the Execution context in which it was created, even after that EC is gone.

console.dir(booker);


// More Closure Examples

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    // console.log(a * 2); // this is a closure
  };
};

const h = function () {
  const b = 777;
  f = function () {
    // console.log(b * 2); // this is a closure
  };
};

g();
f();
h();
f();

// Example 2
// A timer function is a closure

const boardPassengers = function (n, wait) {
  const perGroup = n / 3; // this is a closure

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// const perGroup = 1000; // this is a closure
boardPassengers(180, 3);

*/
//////////////////////////////////////
// Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
