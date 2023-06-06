'use strict';
////////////////////////////////////// DEFAULT PARAMETERS //////////////////////////////


const bookingArr = []
const createBooking = function(flightNum, numPassengers, price){
    //ES5 WAY OF DOING IT
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