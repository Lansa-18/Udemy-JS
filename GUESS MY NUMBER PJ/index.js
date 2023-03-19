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

// Adding an event listner
// the function that is passed into an event listner is called an event handler
btnCheck.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if(!guess){
    document.querySelector('.message').textContent = '⛔ No Number!';

  }
});

// this particular function will only be called anytime that event takes place and that is the clicking of the button
