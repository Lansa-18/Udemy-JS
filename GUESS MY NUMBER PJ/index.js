'use strict';
/*
console.log(document.querySelector('.message').textContent);

// API stands for Application Programming Interface
// APIs are libraries that are written in Javascript and we can actually use them in out JS.

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;

// With an input field, to get the value property we have to use the '.value' method
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// An event is something that happens on the page, an event listner waits for the certain event to happen on the page and then reacts to it.

let btnCheck = document.querySelector('.check');
let btnAgain = document.querySelector('.again');

const secretNumber = Math.trunc(Math.random() * 20) + 1;

// initializing the initial score to be 20

// This particular variable here can also be called a state variable because this score is part of the application state which is basically all the data that is relevant to the application.

let score = 20;

// Adding an event listner
// the function that is passed into an event listner is called an event handler
btnCheck.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    // When player wins Always specify a string when trying to style
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;   
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', () => {
    if (document.querySelector('.highscore').textContent > document.querySelector('.score').textContent ){
        document.querySelector('.highscore').textContent = document.querySelector('.score').textContent
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.body').style.backgroundColor = '#222';
        document.querySelector('.score').textContent = 20;
        document.querySelector('.guess').value = '';
    } else{
        document.querySelector('.score').textContent = 20;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.body').style.backgroundColor = '#222';
        document.querySelector('.highscore').textContent = score;
        document.querySelector('.guess').value = '';
    }

});

// this particular function will only be called anytime that event takes place and that is the clicking of the button
