'use strict';

// console.log(document.querySelector('.message'));

// document.querySelector('.message').textContent = 'CORRECT-NUMBER🥳';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // console.log(document.querySelector('.guess').value);

//                         ADD EVENT LISTNER🟥

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// let highscore=0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //addeventlistener ch jere 2 attributes ne ode cho pela wala hunda 'event name' te doosra to perform operation when the first will be executed second one is also known as event handler
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //WHEN THERE IS NO INPUT

  if (!guess) {
    // document.querySelector('.message').textContent = 'NOT A NUMBER❌';
    displaymessage('NOT A NUMBER❌');
  }

  //WHEN PLAYER WINS
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'CORRECT-NUMBER🥳';
    displaymessage('CORRECT-NUMBER🥳');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //         WHEN GUESS IS NOT EQUAL TO SECRETNUMBER🟥
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'TOO-HIGH📈' : 'TOO-LOW📉';
      displaymessage(guess > secretNumber ? 'TOO-HIGH📈' : 'TOO-LOW📉');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lose the game🤯';
      displaymessage('You lose the game🤯');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  // //WHEN VALUE IS HIGHER
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'TOO-HIGH📈';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lose the game🤯';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'red';
  //     }
  //   }

  //   //WHEN VALUE IS LOW
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'TOO-LOW📉';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lose the game🤯';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'red';
  //     }
  //   }
});

//again functionality

document.querySelector('.again').addEventListener('click', function () {
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displaymessage('Start guessing...');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
