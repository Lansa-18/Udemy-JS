'use strict';

// PROBLEM 1

// We work for a company building a smart home thermometer. Our most recent task is this "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 15, 14, 9, 5];

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

const calcTempAmp = function (temps) {
  // finding the max value in an array
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];

    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
const tempAmp = calcTempAmp(temperature);
console.log(tempAmp);

// PROBLEM 2 
// Function should now receive 2 arrays of temps

// Just merge the 2 arrays together at the beginning of the function

const calcTempAmpNew = function (temps1, temps2) {
    // Merging both arrays and creating a new array
    const temps = temps1.concat(temps2);
    console.log(temps);

    // finding the max value in an array
    let max = temps1[0];
    let min = temps1[0];
  
    for (let i = 0; i < temps1.length; i++) {
      const currTemp = temps1[i];
  
      if (typeof currTemp !== 'number') continue;
  
      if (currTemp > max) max = currTemp;
      if (currTemp < min) min = currTemp;
    }
    console.log(max, min);
    return max - min;
  };
  const tempAmpNew = calcTempAmpNew([1, 0, 2], [9, 0, 5]);
  console.log(tempAmpNew);