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

// CODING CHALLENGE #1
// GIVEN DATA
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),
};

poll.registerAnswers = function () {
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
      this.answers[registerPrompt] = 0 + 1;
      console.log(this.answers);
    } else {
      alert('Conditions are not satisfied');
      break;
    }
  }
};
const register = poll.registerAnswers;
const registerPoll = register.bind(poll);

// applying the function on the answer poll button
const pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', registerPoll);

poll.displayResults = function(type){
  
}




