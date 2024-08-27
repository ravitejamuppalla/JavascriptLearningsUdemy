'use strict';

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const rolldieButton = document.querySelector('.btn--roll');
const holddieButton = document.querySelector('.btn--hold');
const currentscoreofplayer1 = document.getElementById('current--0');
const currentscoreofplayer2 = document.getElementById('current--1');
const dicerolling = document.querySelector('.dice');

score1.textContent = 0;
score2.textContent = 0;
let currentScore = 0;
let activeplayer = 0;
dicerolling.classList.add('hidden');

rolldieButton.addEventListener('click', function () {
  let numberwhenrolldie = Math.trunc(Math.random() * 6) + 1;
  dicerolling.classList.remove('hidden');
  dicerolling.src = `dice-${numberwhenrolldie}.png`;

  if (numberwhenrolldie != 1) {
    currentScore += numberwhenrolldie;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentScore;
  } else {
    console.log(currentScore);
    document.querySelector(`#score--${activeplayer}`).textContent =
      currentScore;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});

// holddieButton.addEventListener('click', function () {
//     if()
// });
