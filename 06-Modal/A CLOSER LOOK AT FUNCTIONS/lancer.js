'use strict';
////////////////////////////////////// DEFAULT PARAMETERS //////////////////////////////

// without default parameters
const bookingArr = []
const createBooking = function(flightNum, numPassengers, price){
    numPassengers = numPassengers || 1;
    price = price || 199;
    
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookingArr.push(booking)
}

createBooking('LH123')