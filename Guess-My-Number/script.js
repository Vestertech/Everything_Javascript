"use-strict";

// Document Object Model (DOM) Manipulation
// DOM is a structured representation of an HTML document
// Allows JavaScript to access HTML elements and styles to manipulate them
// DOM is automatically created by the browser
// DOM is stored in the document object as a tree structure
// DOM is not JavaScript specific
// Dom are nodes, methods and properties from browsers, which  are API's for JavaScript to manipulate HTML elements. Other examples of API's are fetch, geolocation, timers, etc.

// Selecting and Manipulating Elements

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number! 🎉";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// Handling Click Events

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Math.trunc() removes the decimal part of a number
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number! 🚫";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "💥 Correct Number !";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //   when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 😥😠";
      score--;
      document.querySelector(".score").textContent = 0;
    }

    //   when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 😥😠";
      score--;
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Coding challenge 1

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
