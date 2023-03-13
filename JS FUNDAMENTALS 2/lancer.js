    'use strict'; // Helps us write cleaner codes and avoid bug errors
    
    let hasDriversLicense = false;
    const passTest = true;

    // strict mode helps the browser identify errors in spelling in codes
    // if(passTest) hasDriverLicense = true;
    // if(hasDriversLicense) console.log('I can drive :D');

    // it also helps identify javascript reserved keywords
    // const private = 'Audio'


    // function foodProcessor(oranges, apples){
    //     const juice = `Juice with ${oranges} oranges and ${apples} apples.`;
    //     return juice; 
    // }

    // const appleJuice = foodProcessor(0,5);
    // console.log(appleJuice);

    // const appleOrangeJuice = foodProcessor(4,2);
    // console.log(appleOrangeJuice);

    // function declarations are basically functions that have been called using the function keyword
    // function calcAge1 (birthYear){
    //     return 2023 - birthYear;
    // }
    // const age1 = calcAge1(2004);

    // function expressions are basically functions that are called without the function name it self present. All other aspect of the function are called normally and instead it is immediately stored into a variable.
    // It is also called an ANONYMOUS FUNCTION
    // const calcAge2 = function (birthYear){
    //     return 2023 - birthYear;
    // }
    // const age2 = calcAge2(1973);

    // console.log(age1,age2);

    // Main Difference between both function types is the fact that you can actually call function declarations b4 they are defined in the code.

    // ARROW FUNCTIONS
    // const calcAge3 = birthYear => 2023 - birthYear;
    // const age3 = calcAge3(2010);
    // console.log(age3);

    // const yearUntilRetire = (birthYear, firstName) => {
    //     const age = 2023 - birthYear;
    //     const retireAge = 65 - age;
    //     // return retireAge;
    //     return `${firstName} retires in ${retireAge} years`
    // }

    // console.log(yearUntilRetire(2004, 'Jonas'));
    // console.log(yearUntilRetire(2004, 'Lancer'));


    // CODING CHALLENGE

    // function to calculate the average of 3 scores.
    // const calcAverage = (para1, para2, para3) => (para1 + para2 + para3) / 3;

    // Getting the average of the Dolphin and Koalas Team
    // const avgDolphins = calcAverage(85,54,41);
    // const avgKoalas = calcAverage(23,34,27);

    // function to calculate the winner between the 2 teams
    // function checkWinner(avgDolphins, avgKoalas){
    //     if (avgDolphins >= (avgKoalas*2)) {
    //         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    //     } else if (avgKoalas >= (avgDolphins*2)) {
    //         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    //     } else if (avgDolphins === avgKoalas) {
    //         console.log(`Ends in a DRAW! ${avgDolphins} vs. ${avgKoalas}`);
    //     } else {
    //         console.log('Nobody Wins!');
    //     }

    // }

    // checkWinner(avgDolphins, avgKoalas);




    // Introduction to Arrays
    // const year = new Array(1991, 1992, 1993, 1994, 1995);
    // console.log(year);

    // Exercise1
    // const calcAge = function (birthYear) {
    //     return 2023 - birthYear;
    // }
    // const year1 = [1996, 1997, 1998, 1999, 2000];
    // const age1 = calcAge(year1[0]);
    // const age2 = calcAge(year1[2]);
    // const age3 = calcAge(year1[4]);

    // console.log(age1, age2, age3);

    // const ages = [ calcAge(year1[0]),  calcAge(year1[2]),  calcAge(year1[4])];
    // console.log(ages);

    // ARRAY METHODS
    // ADDING ELEMENTS
    const friends = ['tife', 'micheal', 'david'];
    const newLength = friends.push('ismail');

    // To get the length of an array after the push method has been used on it, just assign the expression into a variable to store that variable and then call the variable. The variable would return the length of the new array
    // console.log(newLength);

    friends.unshift('John');
    // console.log(friends);

    // REMOVE ELEMENTS
    // The pop methods removes elements at the and of the array, it returns the removed element from the array, instead of the lenth
    const popped = friends.pop();
    console.log(popped);
    console.log(friends);

    //  the shift method removes the first element in the array. 
    friends.shift();
    console.log(friends);
