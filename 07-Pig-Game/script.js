"use-script";

// Selecting Elements
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEL = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// Starting Conditions

const init = function () {
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  diceEL.classList.add("hidden");

  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  current1El.textContent = 0;
  player0EL.classList.remove("player--winner");
  player1EL.classList.remove("player--winner");
  player0EL.classList.add("player--active");
  player1EL.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};

// Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. generate a random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    diceEL.classList.remove("hidden");
    diceEL.src = `dice-${dice}.png`;

    // 3. Check if rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //   switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score.
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    // 2. check if player's score is >= 100
    if (score[activePlayer] >= 20) {
      playing = false;
      diceEL.classList.add("hidden");
      // finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }

    // 3. Switch to the next player

    switchPlayer();
  }
});

// create a variable that holds the state of the game, which deactivates the buttons when the game is over and activates them when the game is not over
// let playing = true;
// if(playing){
//      do something
// } else {
//     do something else
// }

// Resetting the Game
btnNew.addEventListener("click", function () {
  init();
});
