    'use strict'; // Helps us write cleaner codes and avoid bug errors
    
    let hasDriversLicense = false;
    const passTest = true;

    // strict mode helps the browser identify errors in spelling in codes
    // if(passTest) hasDriverLicense = true;
    // if(hasDriversLicense) console.log('I can drive :D');

    // it also helps identify javascript reserved keywords
    // const private = 'Audio'


    function foodProcessor(oranges, apples){
        const juice = `Juice with ${oranges} oranges and ${apples} apples.`;
        return juice; 
    }

    const appleJuice = foodProcessor(0,5);
    console.log(appleJuice);

    const appleOrangeJuice = foodProcessor(4,2);
    console.log(appleOrangeJuice);

    // function declarations are basically functions that have been called using the function keyword
    // function calcAge1 (birthYear){
    //     return 2023 - birthYear;
    // }
    // const age1 = calcAge1(2004);
    // console.log(age1);


    // function expressions are basically functions that are called without the function name it self present. All other aspect of the function are called normally and instead it is immediately stored into a variable.
    // It is also called an ANONYMOUS FUNCTION
    const calcAge2 = function (birthYear){
        return 2023 - birthYear;
    }

    const age2 = calcAge2(1973);
    console.log(age2);