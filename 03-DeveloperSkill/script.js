// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = "23";
// if (x === 23) console.log(23);

const calcAge = (birthYear) => 2023 - birthYear;

console.log(calcAge(1999));

// usiing Google , Stackoverflow , MDN , W3Schools , MDN

// Understanding the problem

// Divide and Conquer

// Do your research

// Write Pseudo code

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 7, 4, 8], [2, 5, 9, 6]);
console.log(amplitudeNew);

// Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C. fix the bug

    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };
  // B. find the bug
  console.table(measurement);
  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A. Identify the bug
console.log(measureKelvin());

// Debugger

// debugger is a keyword that we can use to debug our code by creating a breakpoint in our code and then we can see the values of the variables at that point in time.
//  We can also use the debugger to step through our code line by line.This is very useful when we want to understand what is happening in our code.
// We can also use the debugger to see the call stack and the scope of our variables.

const calcTempAmplitudeBug = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    // debugger;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 7, 4, 8], [2, 5, 9, 6]);

// A. Identify the bug
console.log(amplitudeBug);
*/

// Coding Challenge #1

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1}days ...`;
  }
  console.log("..." + str);
};
printForecast(data1);
