'use strict';
let message = document.querySelector('.message');
let guess = document.querySelector('.guess');
let scorevalue = document.querySelector('.score');
let check = document.querySelector('.check');
let number = document.querySelector('.number');
let body = document.querySelector('body');
let highestscore = document.querySelector('.highscore');

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highestScore = 0;
console.log(randomNumber);
message.textContent = 'Start guessing...ewee';
check.addEventListener('click', function () {
  const inputText = guess.value;
  if (score != 0) {
    if (Number(inputText) === randomNumber) {
      message.textContent = 'You won the Game 💪';
      number.textContent = inputText;
      body.style.backgroundColor = '#2f9e44';
      highestscore.textContent = score;
      number.style.width = '30rem';
    }
    if (Number(inputText) > randomNumber) {
      message.textContent = 'Too High Number..!';
      score--;
      scorevalue.textContent = score;
    }
    if (Number(inputText) < randomNumber) {
      message.textContent = 'Too Low Number..!';
      score--;
      scorevalue.textContent = score;
    }

    if (score == 0) message.textContent = 'You lost match 👎';
  }
});

function wonGame() {}

function restart() {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  message.textContent = 'Start guessing...';
  scorevalue.textContent = score;
  guess.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
}

document.querySelector('.again').addEventListener('click', restart);
