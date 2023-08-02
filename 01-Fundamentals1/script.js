/*
// Linking a JavaScript File
let js = "Amazing";
if (js === "Amazing");
alert("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10);

// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Ifeanyi";
console.log(firstName);


// Data Types
// Values holds datatypes and variables are like containers that store values
// 7 Primitive Data Types
// 1. Number: Floating point numbers, used for decimals and integers
// 2. String: Sequence of characters, used for text
// 3. Boolean: Logical type that can only be true or false, used for taking decisions
// 4. Undefined: Value taken by a variable that is not yet defined ('empty value')
// 5. Null: Also means 'empty value'
// 6. Symbol (ES2015): Value that is unique and cannot be changed
// 7. BigInt (ES2020): Larger integers than the Number type can hold

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);

console.log(typeof year);
year = 1999;
console.log(typeof year);

console.log(typeof null);
// let const and var
// we use let for variables that could be reassigned or mutated
// Const for variables that are immutable

let age = 24;
age = 23;
console.log(age);

const birthYear = 1999;
// birthYear = 1998;
console.log(birthYear);


// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Sylvester";
const lastName = "Eziagor";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
// challenge 1

// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// Strings and Template Literals
const firstName = "Sylvester";
const job = "Software Developer";
const birthYear = 2009;
const year = 2023;
const age = year - birthYear;
const intro = `I'm ${firstName}, a ${age} year old ${job}!`;
console.log(intro);

console.log(`Just a regular string...`);
console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String  with
multiple
lines`);

// Taking Decisions: if / else Statements
// In the if statement, the condition is evaluated to a boolean value (true or false)
// If the condition is true, the code block is executed
// If the condition is false, the code block is skipped
// The else statement is executed if the condition is false
// variables declared inside a code block are scoped to that code block and cannot be accessed outside of it
// variables declared outside a code block are scoped globally and can be accessed anywhere in the code

if (age >= 18) {
  console.log(`Sylvester can start processing a driving license 🚗`);
} else {
  console.log(`Sylvester can start driving in ${18 - age} years`);
}

// Coding Challenge 2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// Type Conversion and Coercion
// Type Conversion: Manually convert from one type to another
// Type Coercion: JavaScript automatically converts types behind the scenes for us
// Type Conversion
const inputYear = "1999";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Ifeanyi"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");

let n = "1" + 1; // '11'
n = n - 1; // 11 - 1 = 10
console.log(n);

// Truthy and Falsy Values
// falsy values are values that are not exactly false but will become false when we try to convert them to a boolean
// conversion to boolean happens behind the scenes in logical operators and in the if/else statement
// conversion to boolean is implicit and not explicit
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Sylvester"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height; //= 0;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is undefined");
}

// Equality Operators: == vs === (strict equality operator)
// == does type coercion while === does not

const age = "18";
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What's your favourite number?"));
if (favourite === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}
if (favourite !== 23) console.log("Why not 23?");

// Logical Operators
// Logical operators can be used to combine multiple boolean values and then return a single boolean value
// boolean logic can be used to build more complex conditions

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sylvester is able to drive");
} else {
  console.log("Someone else should drive");
}

// Coding Challenge 3
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 123) / 3;
console.log(dolphinsAverage >= koalasAverage);
const minScore = 100;
if (dolphinsAverage > koalasAverage && dolphinsAverage >= minScore) {
  // if both teams have the same score, the dolphins win
  console.log("Dolphins win the trophy");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= minScore) {
  console.log("Koalas win the trophy");
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= minScore &&
  koalasAverage >= minScore
) {
  console.log("Both teams win the trophy");
} else {
  console.log("No one wins the trophy");
}

// The switch Statement
// The switch statement is similar to the if/else statement which compares a value against multiple possible outcomes.
// The switch statement is used when we have a single value and we want to check it against multiple options
// The switch statement is a cleaner way to write long if/else statements

const day = "monday";
switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    break;
  case "tuesday":
    console.log("for class");
    break;
  case wednesday:
  case thursday:
    console.log("Record videos");
    break;
  case friday:
    console.log("Attend meetings");
    break;
  case saturday:
  case sunday:
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

// Statements and Expressions
// An expression is a piece of code that produces a value
// A statement is a bigger piece of code that is executed and which does not produce a value on itself
// An expression can be part of a statement and its a boolean value

// The Conditional (Ternary) Operator
// The conditional operator is a short hand if/else statement
// The conditional operator is a ternary operator because it has three parts
// The conditional operator is an expression and not a statement
*/

const age = 23;
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// Coding Challenge 4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `Your bill is ${bill}, Your tip is ${tip}, YOur total is ${bill + tip}`
);
