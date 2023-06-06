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
// To skip an argument so that we can leave it at it's default parameter that was assigned, all we need to do is set it to undefined
createBooking('LH123');
createBooking('LK123', 5, 1200);
createBooking('AK123', 2);
createBooking('BK123', 3);