'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = () => {
  const current = (document.getElementById(
    `current--${activePlayer}`
  ).innerText = 0);
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. generete num 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. check for rolled 1:

  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    const current = (document.getElementById(
      `current--${activePlayer}`
    ).innerText = currentScore);
  } else {
    //   switch player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  //add current score to the general
  scores[activePlayer] += currentScore;
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--winner');
    btnRoll.disabled = true;
    btnHold.disabled = true;
    return;
  }
  const general = (document.querySelector(`#score--${activePlayer}`).innerText =
    scores[activePlayer]);
  currentScore = 0;

  //switch the player
  switchPlayer();
});

btnNew.addEventListener('click', function () {
  currentScore = 0;
  activePlayer = 0;
  scores[0] = 0;
  scores[1] = 0;
  diceEl.classList.toggle('hidden');
  document.getElementById(`current--0`).innerText = 0;
  document.getElementById(`current--1`).innerText = 0;
  document.getElementById(`score--0`).innerText = 0;
  document.getElementById(`score--1`).innerText = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  btnRoll.disabled = false;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--winner');
});
