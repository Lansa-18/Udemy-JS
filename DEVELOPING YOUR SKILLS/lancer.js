'use strict';

// PROBLEM 1

// We work for a company building a smart home thermometer. Our most recent task is this "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 15, 14, 9, 5];
const temperature2 = [3, 0, 5];

// 1  Understanding the problem
// What is temperature amplitude? = Difference between highest and lowest temp
// How do we calculate the max and min temperatures
// What does a sensor error look like, what do we do once an error pops up. = We can just ignore it.

// 2 Breaking into Sub Problems
// - How to ignore errors
// - Find Max value
// - Find min value
// - Substract min from max
// - return the amplitude.

// const calcTempAmp = function (temps) {
//   // finding the max value in an array
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];

//     if (typeof currTemp !== 'number') continue;

//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const tempAmp = calcTempAmp(temperature);
// console.log(tempAmp);

// PROBLEM 2
// Function should now receive 2 arrays of temps

// Just merge the 2 arrays together at the beginning of the function

// const calcTempAmpNew = function (temps1, temps2) {
//     // Merging both arrays and creating a new array
//     const temps = temps1.concat(temps2);
//     console.log(temps);

//     // finding the max value in an array
//     let max = temps1[0];
//     let min = temps1[0];

//     for (let i = 0; i < temps1.length; i++) {
//       const currTemp = temps1[i];

//       if (typeof currTemp !== 'number') continue;

//       if (currTemp > max) max = currTemp;
//       if (currTemp < min) min = currTemp;
//     }
//     // console.log(max, min);
//     return max - min;
//   };
// //   const tempAmpNew = calcTempAmpNew(temperature, temperature2);
// //   console.log(tempAmpNew);

//   const measureKelvin = function(){
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',

//         // C. Fix the bug
//         value: Number(prompt('Degrees celcius'))
//     }

//     // B. Find the Bug
//     console.table(measurement)

//     const kelvin = measurement.value + 273;
//     return kelvin
//   }

//     //   A Identify the bug
//   console.log(measureKelvin());

//   CODING CHALLENGE 4

// The problem
// create a print fore cast array,
// it should take in an argument of arr
// loop through the array and at each iteration log a string using the value at each interval.
// figure out a way to increase the days depending on the amount of items in the array.

// SOLVING THE PROBLEM

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

// 1  Understanding the problem
// - array transformed to strings and then separated by ...
// - What is the X days? = index + 1

// 2 Breaking into Sub Problems
// - transforming the array into a string
// - transforming each element to string with C
// - string needs to contain the current day
// - Add ... between elements at the start and end of the string.
// - log the string to the console.

// const printForeCast = arr =>{
//     // Transforming the array into a string
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         // adding each temp in the array with the days increasing progressively based on the length of the array...
//         str += ` ... ${arr[i]}C in ${i + 1} days`;
//     }
//     console.log(str);
// }

// printForeCast(testData2);


// To show i actually understood what i coded.

const printForeCast = arr =>{
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        string += ` ... ${arr[i]}C in ${i + 1}days`     
    }
    console.log(string);
}

printForeCast(testData1);