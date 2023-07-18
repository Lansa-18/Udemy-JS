'use strict';
////////////////////////////////////// DEFAULT PARAMETERS //////////////////////////////

const bookingArr = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5 WAY OF DOING IT
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookingArr.push(booking);
};
// To skip an argument so that we can leave it at it's default parameter that was assigned, all we need to do is set it to undefined
// createBooking('ABC12', 4, undefined);
// createBooking('LH123');
// createBooking('LK123', 5, 1200);
// createBooking('AK123', 2);
// createBooking('BK123', 3);

/////////////////////////////// ------------ HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE ---------------------------------- /////////////////////////////////
const flight = 'LH324';
const lancer = {
  name: 'Mapelujo Abdulkareem',
  passport: 26272788722,
};

const checkIn = function (flightNum, passenger) {
  // NOTE THAT IT IS BAD PRACTICE TO CHANGE THE NAMES OF PARAMETERS OF A FUNCTION IN THE CODE BLOCK
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 26272788722) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};

// checkIn(flight, lancer);
// console.log(flight);
// console.log(lancer);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

// newPassport(lancer);
// checkIn(flight, lancer);
// console.log(flight, lancer);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

const names = ['jonas', 'lancer', 'martha'];
// names.forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
// greeterHey('Lancer');
// greeterHey('Olamide');

// Rewriting the above function using arrow functions
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

const greetHello = greet2('Hello');
// greetHello('Abdulkareem');

/////////////////////// -------------------------- THE CALL AND APPLY METHOD ----------------------- ///////////////////////////////////
const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Lancer');
// lufthansa.book(635, 'Olamide');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// does not work because the 'this' keyword would point to undefined as it is now a regular function call and not a method.
// book(23, 'Sarah Williams')

// USING THE CALL METHOD to set the 'this' keyword.
// book.call(eurowings, 23, 'Sarah Williams')
// console.log(eurowings);

// book.call(lufthansa, 154, 'Mapelujo Abdulkareem')
// console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iatacode: 'LX',
  bookings: [],
};

// book.call(swiss, 583, 'Mapelujo Faiq')
// console.log(swiss);

// USING THE APPLY METHOD.
// const flightData = [432, 'Mapelujo Faiza'];

// book.apply(lufthansa, flightData)
// console.log(lufthansa);

// book.apply(swiss, [234, 'Mapelujo Aliyah'])

// THE BIND METHOD
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// bookEW('567', 'Oluokun Shaakirah');
// bookLH('468', 'Mapelujo Abdulrazaq');
// bookLX('567', 'Jonas Schmedtmann');

const bookEW23 = book.bind(eurowings, 23);
// bookEW23('lansa');

// with Event Listeners.
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application USECASE
// NOTE: When trying to preset values, the order of the argument matters a lot.
// const addTax = (rate, value) => value + (value * rate);
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

// Challenge
const add = function (rate) {
  return function (price) {
    return price + price * rate;
  };
};

const addVat = add(0.23);
// console.log(addVat(100));

// CODING CHALLENGE #1 (MY SOLUTION)
// GIVEN DATA
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),
  registerNewAnswers() {
    // displaying the prompt
    const registerPrompt = Number(
      prompt(
        'What is your favorite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++'
      )
    );

    // looping through the answers array
    for (const [i, answer] of this.answers.entries()) {
      if (
        registerPrompt === 0 ||
        registerPrompt === 1 ||
        registerPrompt === 2 ||
        (registerPrompt === 3 && registerPrompt <= 3)
      ) {
        this.answers[registerPrompt]++;
        break;
      } else {
        alert('Conditions are not satisfied');
        break;
      }
    }

    // creating a displayResult method that should be called by the registerNewAnswer method.
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// applying the function on the answer poll button
const pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', poll.registerNewAnswers.bind(poll));

// JONAS' SOLUTION.
// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Getting the answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
//       )
//     );

//     // Registering the answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

//   poll.displayResults.call({answers: [5,2,3]}, 'string')
//   poll.displayResults.call({answers: [5,2,3,9,6,1]}, 'string')

//////////////////////////// --------------- IMMEDIATELY INVOKED FUNCTION EXPRESSIONS ---------------------- ///////////////////////////////
// VERY USEFUL WHEN IT COMES TO ASYNC & AWAIT.

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// // The IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION) expression. I.E this is how it's written
// (function () {
//   console.log('This will never run again');
// })();

// // Using arrow functions
// (() => console.log('This will ALSO never run again'))();


// CLOSURES

const secureBooking = function(){
  let passengerCount = 0;

  return function(){
    passengerCount++
    console.log(`${passengerCount} passengers`);
  }
} 

const booker = secureBooking();

// booker();
// booker();
// booker();

//  A function has access to the variable environment of the execution context in which it was created.
// In a closure, the Variable Environment is then attached to a function, exactly as it was at the time and place the function was created.
// A closure takes priority before the global scope.

// A closure is the closed over VARIABLE ENVIRONMENT of the execution context in which a function was created, even after the execution context is gone.
// A closure gives a function access to all the variables of it's PARENT FUNCTION, even after that parent function has returned. The function keeps a reference to it's outer scop, which preserves the scope chain throughout time.
// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.

// A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where thr function was created.

// WE DON'T MANUALLY CREATE CLOSURES, IT IS A JAVASCRIPT FEATURE THAT HAPPENS AUTOMATICALLY, AS IT'S AN INTERNAL PROPERTY OF A FUNCTION. IT IS NOT A TANGIBLE JAVASCRIPT OBJECT.
// HOWEVER WE CAN TAKE A LOOK AT THESE INTERNAL PROPERTIES THROUGH THE CONSOLE using (console.dir).
// Double brackets like ([[]]) refers to internal properties in javascript that we cannot explicitly access and make use of in our codes.

// Accessing the internal properties of a closure through the CONSOLE.
// console.dir(booker)

// MORE CLOSURE EXAMPLES.

// Example 1
let f;
const g = function(){
  const a = 23;
  f = function(){
    console.log(a * 2);
  }
}

const h = function(){
  const b = 777;
  f = function(){
    console.log(b * 2);
  }
};

// g();
// f();
// console.dir(f)

// Re-assigning the (f) function.
// h();
// f();
// console.dir(f);

// Example 2
// const boardPassengers = function(n, wait){
//   const perGroup = n/3;

//   setTimeout(function(){
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers `);
//   }, wait * 1000)

//   console.log(`Will start boarding in ${wait} seconds`);
// }

// setTimeout(function(){
//   console.log('TIMER');
// }, 1000)

// setTimeout(function(){
//   console.log('SECOND TIMER');
// }, 1000)

// THE CLOSURE HAS PRIORITY OVER THE SCOPE CHAIN.
// const perGroup = 1000

// boardPassengers(240, 3);

// CODING CHALLENGE #2

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.body.addEventListener('click', ()=>{
//     header.style.color = 'blue';
//   })
// })();