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

const oneWord = function (str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

const high5 = function (){
    console.log('👋');
}

const names = ['jonas', 'lancer', 'martha'];
// names.forEach(high5);

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
gre