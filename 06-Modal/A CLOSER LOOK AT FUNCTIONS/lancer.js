'use strict';
////////////////////////////////////// DEFAULT PARAMETERS //////////////////////////////


const bookingArr = []
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
    //ES5 WAY OF DOING IT
    // numPassengers = numPassengers || 1;
    // price = price || 199;


    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookingArr.push(booking)
}

createBooking('LH123');
createBooking('LK123', 5, 1200);
createBooking('AK123', 2);
createBooking('BK123', 3);