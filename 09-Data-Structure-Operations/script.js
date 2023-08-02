"use strict";
// Destructuring Arrays

// Destructuring is a way of unpacking values from an array or an object into separate variables.
// Javascript does Array destructuring whenever it sees array brackets on the left side of the assignment operator.
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 Enhanced Object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    Address = "Lifecamp Abuja", // hard coded values can be set as default values
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${Address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// String Methods Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const getCode = (str) => str.slice(0, 3).toUpperCase();
const getCode = function (str) {
  return str.slice(0, 3).toUpperCase();
}; // function to get the first 3 letters of a string and convert it to uppercase
const fligh = flights.split("+"); // split the flights string into an array of 4 elements
// console.log(fligh);
for (const flight of fligh) { // loop through the fligh array and log the output to the console
  const [type, from, to, time] = flight.split(";"); // destructuring the flight array into 4 variables of the output of the split method
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36); // replace the underscore with a space and replace the colon with an h, then pad the output to the left with 36 spaces,startswith method checks if the type variable starts with _Delayed, if it does, it adds a red circle to the output.

  console.log(output);
}

/*
// Coding Challenge #4


Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

// SOLUTION  refer to this for converting from underscore_case to camelCase
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

///////////////////////////////////
// Working with Arrays - Part 3
// Split and join allows us to split a string into multiple parts and then join them together again.
console.log("a+very+nice+string".split("+"));
console.log("Sylvester Eziagor".split(" "));

const [firstName, lastName] = "Sylvester Eziagor".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
const capitalizeName = function (name) {
  const names = name.split(" "); // split the name into an array and store it in names
  const namesUpper = []; // initialize an empty array to store the capitalized names
  for (const i of names) {
    // namesUpper.push(i[0].toUpperCase() + i.slice(1)); // capitalize the first letter of each name and add it to the namesUpper array
    namesUpper.push(i.replace(i[0], i[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("sylvester eziagor");
// PADDING

// Padding a string means to add a number of characters to the string until the string has a certain desired length.
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("Sylvester".padStart(25, "+").padEnd(35, "+"));

const maskCreditCard = function (number) {
  const str = number + ""; // convert the number to a string,   when an operand is a string, it also converts all other operands to strings
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard("567898765434567834567654"));
console.log(maskCreditCard("1234567890"));
console.log(maskCreditCard(1234567890890));

// Repeat
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} Planes in line ${"✈".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// Working with Strings - Part2
const airline = "TAP Air Portugal";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "sYlVESTer"; // Sylvester
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@sylvester.io";
const loginEmail = "   Hello@sylvester.io";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate")); // regular expression

// Methods that return Booleans which are .includes, .startsWith, .endsWith
// boolean methods
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");


// Working with Strings - Part1
// strings are primitive values and are immutable without methods
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));


// Coding Challenge #3
/////////////////////////////////////////////
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1
const events = [...new Set([gameEvents.values()])];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4
for (const [key, value] of gameEvents) {
  // if (key < 45) {
  //   console.log(`[FIRST HALF] ${key}: ${value}`);
  // } else {
  //   console.log(`[SECOND HALF] ${key}: ${value}`);
  // }
  const half = key <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] : ${key}: ${value}`);
}
 
///////////////////////////////////////////////////////////
// Maps_iterations
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// Convert object to map using Object.entries()
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// converting Map to an array
// you have to unpack them with the spread operator
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);


// Maps Fundamentals
// Maps are data structures that we can use to map values to keys.  We can use any value as a key and we can also use any value as a value. other than in Object literals where we can only use strings as keys.

const rest = new Map();
rest.set("name", "Classico Italiano"); // .set is used to add new elements to the map
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Abuja, Nigeria")); // .set also returns the new map with the new element added to it(Updated Map)

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed"); // we can chain the .set method to add multiple elements to the map

console.log(rest.get("name")); // .get is used to retrieve elements from the map
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // we can use expressions as keys

console.log(rest.has("categories")); // .has is used to check if a key exists in the map
rest.delete(2); // .delete is used to delete elements from the map
// rest.clear(); // .clear is used to clear the entire map

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size); // .size is used to get the size of the map

console.log(rest.get(arr));

// Sets
// Sets are basically a collection of unique values. So in a set, all the duplicate values are automatically removed.

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(new Set("Sylvester"));

console.log(ordersSet.size); //.Size instead of length in arrays

console.log(ordersSet.has("Pizza")); // .has instead of includes in arrays

ordersSet.add("Garlic Bread"); // .add instead of push in arrays
ordersSet.add("Garlic Bread"); //ignored because it is a duplicate

ordersSet.delete("Risotto"); // .delete instead of pop in arrays

ordersSet.clear(); // .clear instead of splice in arrays

// Looping over sets
for (const order of ordersSet) console.log(order);
// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)]; // using the spread operator to convert the set to an array
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("Sylvester").size);

// sets are also iterables and all iterables work with the spread operator and destructuring.  So we can use the spread operator to convert sets to arrays.
// iterables are arrays, strings, maps, sets. NOT objects


// Challenge #2
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
// Object.entries(game.scored);
// console.log(`Goal ${(+i) +1} : ${Name}`);
for (const [i, Name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${Name}`);
}
// 2
// const calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i];
//   }return sum / arr.length;
// };
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const winner = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${winner}: ${odd}`);
}
// Bonus
const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};
// console.log(scorers);


///////////////////////////////////////
// Looping objects: Object keys, values, and entries
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object with .entries
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value] / Properties and values
for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, We are Open at ${open} and close at ${close}`);
}

////////////////////////////////////////
// Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
// optional chaining returns undefined if a property doesn't exist
// with optional chaining (?.) we don't have to check if a property exists

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  console.log(`On ${day} We open at ${open}`);
}

// Methods in optional chaining
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays in Optional Chaining
const users = [{ name: "Sylvester", email: "skulboicaleb@gmail.com" }];
console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("User array empty");

// Looping arrays: The for-of loop
// menu.entries returns an array of the index and the element(array iterator)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const i of menu) console.log(i);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

///////////////////////////////////////
// Challenge #1
// Coding Challenge #1


We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
  console.log(`${players.length}goals were scored`);
  console.log(players);
};
printGoals(...game.scored);
// 7
team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 2 is more likely to win");



nullish coalescing operator
Nullish: returns null and undefined(NOT 0 or '')
// restaurant.numGuests = 0;
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

// Uses of logical operators
// They are used in  ANY data type, return ANY data type, short-circuiting
// Short Circuiting (&& and ||)
console.log("--- OR ---");
// Return the first truthy value or the last value if all are falsy, used in setting default values
console.log(3 || "Sylvester");
console.log("" || "Sylvester");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 0;
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;

console.log("--- AND ---");
// returns the first falsy value or the last value if all are truthy, Used to execute code in the second operand if the first operand is true
console.log(0 && "Sylvester");
console.log(7 && "Sylvester");

console.log("Hello" && 23 && null && "Sylvester");

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");


/////////////////////////////////////// 
Spread is Unpacking an array while Rest is Packing elements into an array.

Rest Pattern and Parameters (Destructuring)

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// REST element must be the last element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");


///////////////////////////////////////
// Spread Operator
unpacking all the elements from an array

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Beans"];
console.log(newMenu);

// Copy array

// Spread operators are used where we would otherwise write values separated by commas.
// Spread operators take all the values from an array and also doesn't create new variables.
// Spread operators use cases are: 1. Creating shallow copies of arrays. 2. Merging arrays together.

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Sylvester";
const letters = [...str, " ", "R."];
console.log(letters);
console.log(...str);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
// spread also works on objects, although it doesn't create new variables and not iterable

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Sylvester" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Bistro Abuja";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
///////////////////////////////////////
// Destucturing Objects
restaurant.orderDelivery({
  time: "22:30",
  Address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ starterIndex: 1 });

// Destructuring Objects ↑↑↑
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant; // Default values
console.log(menu, starters); // menu is not present in restaurant object, so it will be an empty array

// Mutating variables
// {} is to expected to come with a code block, so we need to wrap it in parenthesis ().
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); // We need to wrap it in parenthesis
// console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);
*/
/*
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = [2, 3, 4];
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;

// Switching variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
