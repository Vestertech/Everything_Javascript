"use strict";
/* eslint-disable no-console 
// strict mode helps with syntax errors

// Activating strict mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// functions
// functions has to be declared before they are called or invocated
// After declaration, you store the function in a variable to be called later

function logger() {
  console.log("My name is Sylvester");
}

// calling / running / invoking the function
logger();

// functions can also be declared with parameters
// parameters are like variables that are only available inside the function
function fruitProcessor(apples, oranges) {
  const juice = `Sylvester made Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 7);
console.log(appleJuice);

// function declaration vs function expression
// parameters are placeholders while arguments are the actual values

// function declaration allows us to call the function before it is declared while function expression does not access the function before it is declared because it is stored in a variable and variables are not accessible before they are declared. This is called hoisting

// function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(1999);

// function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1999);

console.log(age1, age2);

// arrow functions
// arrow functions are a shorter way to write functions
// return keyword is not needed when using arrow functions because it is implicit

// arrow function expression
const yearsUntilRetirement = (birthYear, fullName) => {
  const age = 2023 - birthYear;
  const retirement = 70 - age;
  return `${fullName} will retire in ${retirement} years`;
};
const rem = yearsUntilRetirement(1999, "Sylvester");
console.log(rem);

// functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const appleJuice = cutFruitPieces(apples);
  const orangeJuice = cutFruitPieces(oranges);

  const juice = `Sylvester made juice with ${appleJuice} pieces of apple and ${orangeJuice} pieces of orange`;
  return juice;
}
console.log(fruitProcessor(5, 3));

// coding challenge 1
const calcAverage = (a, b, c) => (a + b + c) / 3;

let avgDolphins = calcAverage(85, 54, 71);
let avgKoalas = calcAverage(23, 54, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphin wins (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koala wins (${avgKoalas} vs ${avgDolphins})`;
  } else return `No team wins ...`;
};
console.log(checkWinner(avgDolphins, avgKoalas));

// arrays
// arrays are like big containers, which we can throw variables and values and later reference them

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// arrays are zero based, meaning the first element is 0, second is 1 and so on
// arrays are mutable, meaning you can change the values in the array
const years = new Array(1999, 2000, 2001, 2002, 1967, 1976);
console.log(years);
years[2] = 1997;
console.log(years);

// Exercise
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// Basic array operations
// push adds an element to the end of the array
friends.push("Jay");
console.log(friends);
// unshift adds an element to the beginning of the array
friends.unshift("John");
console.log(friends);
// pop removes the last element of the array
friends.pop();
console.log(friends);
// shift removes the first element of the array
friends.shift();
console.log(friends);
// indexOf returns the index of the element in the array
console.log(friends.indexOf("Steven"));
// includes returns a boolean value if the element is in the array
console.log(friends.includes("Steven"));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}

// coding challenge 2

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, bills, totals);

// objects
// objects are like containers that store properties and values
// objects are not zero based, meaning the first element is 1
// objects are mutable, meaning you can change the values in the object
const sylvester = {
  fullName: "Sylvester",
  lastName: "Eziagor",
  age: 2023 - 1999,
  job: "Software Developer",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(sylvester);

// dot notation
console.log(sylvester.lastName);
// bracket notation
console.log(sylvester["lastName"]);

const nameKey = "Name";
console.log(sylvester["first" + nameKey]);
console.log(sylvester["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Sylvester? Choose between fullName, lastName, age, job and friends"
// );

// if (sylvester[interestedIn]) {
//   // this is a way to check if the property exists in the object
//   console.log(sylvester[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between fullName, lastName, age, job and friends"
//   );
// }

// adding properties to the object
sylvester.location = "Nigeria";
sylvester["twitter"] = "@YOUwooded";
console.log(sylvester);

// challenge
// "Sylvester has 3 friends, and his best friend is called Michael"
console.log(
  `${sylvester.fullName} has ${sylvester.friends.length} friends,  and his best friend is called ${sylvester.friends[0]}`
);

// object methods
// functions held in objects are called methods
// objects can hold functions
const sylvester = {
  fullName: "Sylvester",
  lastName: "Eziagor",
  birthYear: 1999,
  job: "Software Developer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  // return 2023 - this.birthYear;
  // },
  //this equals to object calling the method

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: () => {
    return `${sylvester.fullName} is a ${sylvester.age} year old ${
      sylvester.job
    }, and he has a ${sylvester.hasDriversLicense ? "driver's" : "no"} license
    `;
  },
};

console.log(sylvester.calcAge());

// challenge
// "Sylvester is a 24 year old software developer, and he has a driver's license"
console.log(sylvester.getSummary());

// coding challenge 3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    // This.bmi points to or explicitly call  mark.bmi
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);
console.log(
  mark.bmi > john.bmi
    ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
    : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${john.bmi})`
);

// iteration_ The for loop
// loops allows us to automate repetitive task
// 1st part is the repetitive part
// 2nd part is the boundary
// 3rd iteration
// for loop keeps running while the condition is true

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights consistently ${rep}`);
}

// looping arrays, breaking and continuing
const sylvesterArray = [
  "Sylvester",
  "Eziagor",
  2023 - 1999,
  "Software Developer",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < sylvesterArray.length; i++) {
  // reading from sylvesterArray
  console.log(sylvesterArray[i], typeof sylvesterArray[i]);

  // filling types array
  // types[i] = typeof sylvesterArray[i];
  types.push(typeof sylvesterArray[i]);
}
console.log(types);

const years = [1999, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

// continue and break
// continue exits the current iteration of the loop and continue to the next one
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < sylvesterArray.length; i++) {
  if (typeof sylvesterArray[i] !== "string") continue;
  console.log(sylvesterArray[i], typeof sylvesterArray[i]);
}

// break completely terminates the loop
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < sylvesterArray.length; i++) {
  if (typeof sylvesterArray[i] === "number") break;
  console.log(sylvesterArray[i], typeof sylvesterArray[i]);
}
*/
// looping backwards and loops in loops
const sylvesterArray = [
  "Sylvester",
  "Eziagor",
  2023 - 1999,
  "Software Developer",
  ["Michael", "Peter", "Steven"],
];

// Counter, condition and updating
for (let i = sylvesterArray.length - 1; i >= 0; i--) {
  console.log(i, sylvesterArray[i]);
}

// loops in loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}

// the while loop
// while loop is similar to the for loop
// the while loop is more used when we don't know the exact number of iterations
// Counter, condition and updating
// to specify the condition

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights consistently ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`lifting weights consistently ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6)
    console.log("The loop satisfied the condition and is now done");
}

// coding challenge 4

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bill.length; i++) {
  const tip = calcTip(bill[i]);
  tips.push(tip);
  totals.push(tip + bill[i]);
}

console.log(tips, totals);

// coding challenge 4

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips, bills, totals);

const calcAverage = (arr) => {
  // start by creating a variable 'sum' that starts at 0. This variable will eventually hold the sum of all elements of the array
  let sum = 0;
  // next, create a for loop that will loop over each element of the array
  for (let i = 0; i <= arr.length - 1; i++) {
    // In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together and stored in the 'sum' variable (because you kept adding the current value of the loop to the previous value)
    // sum = sum + arr[i];
    sum += arr[i];
  }
  // To calculate the average, divide the sum you calculated before by the length of the array(because that's the number of elements)
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bill));
