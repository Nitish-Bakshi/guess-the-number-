

//                         ADD EVENT LISTNER🟥

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //WHEN THERE IS NO INPUT

  if (!guess) {
    displaymessage('NOT A NUMBER❌');
  }

  //WHEN PLAYER WINS
  else if (guess === secretNumber) {
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
   
      displaymessage(guess > secretNumber ? 'TOO-HIGH📈' : 'TOO-LOW📉');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('You lose the game🤯');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }


});

//again functionality

document.querySelector('.again').addEventListener('click', function () {
  displaymessage('Start guessing...');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
