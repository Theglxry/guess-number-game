'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1; //btw 1 & 20
let score = 20; //score reduction
let highscore = 0; //manipulating the high score

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = ' 🚫 no number ';
  }

  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 you guessed right!';
    document.querySelector('.number').textContent = secretNumber;

    //css
    document.body.style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = '40rem';

    //log new highscore 
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  }else if (guess !== secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber ? 'Too high! 😅' : 'Too low! 😢';
        score--;
      document.querySelector('.score').textContent = score;

  }else {
    document.querySelector('.message').textContent = '💥you lost the game';
    document.querySelector('.score').textContent = 0;

  }
} 

  // when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! 😅';
      //score rate should reduce on every wrong input/click
      score--; // or  score = score -1 ;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! 😢';
      //score rate should reduce on every wrong input
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//the again button to restore to default.
document.querySelector('.again').addEventListener('click', function () {
  console.log('Again button clicked!');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'start guess...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
