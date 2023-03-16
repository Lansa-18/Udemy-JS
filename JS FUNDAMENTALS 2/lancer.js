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
    // const friends = ['tife', 'micheal', 'david'];
    // const newLength = friends.push('ismail');

    // To get the length of an array after the push method has been used on it, just assign the expression into a variable to store that variable and then call the variable. The variable would return the length of the new array
    // console.log(newLength);

    // friends.unshift('John');
    // console.log(friends);

    // REMOVE ELEMENTS
    // The pop methods removes elements at the and of the array, it returns the removed element from the array, instead of the lenth
    // const popped = friends.pop();
    // console.log(popped);
    // console.log(friends);

    //  the shift method removes the first element in the array. 
    // const shifted = friends.shift();
    // console.log(shifted);
    // console.log(friends);

    // console.log(friends.indexOf('micheal'));
    // console.log(friends.indexOf('bob'));
    // console.log(friends.includes('micheal'));
    // console.log(friends.includes('bob'));

    // if (friends.includes('peter')){
    //     console.log('You have a friend named Micheal');
    // } else {
    //     console.log("You don't have a friend bearing this name");
    // }


    // CODING CHALLENGE 2
    // let tipValue;
    // let totalTip;
    // function calcTip (billValue) {
    //     return billValue >= 50 && billValue <= 300 ? tipValue = billValue * 0.15 : tipValue = billValue * 0.2;
    // }

    // const bills = [125, 555, 44];
    // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

    
    // console.log(bills, tips, totals);


    // OBJECTS!!!
    // Object Literal Syntax
    // const lancer = {
    //     firstName: 'Abdulkareem',
    //     lastName: 'Mapelujo',
    //     age: 2023 - 2004,
    //     job: 'Web Developer',
    //     friends: ['tife', 'micheal', 'david'],
    // }

    // console.log(lancer.job);
    // console.log(lancer['lastName']);

    // const nameKey = 'Name';
    // console.log(lancer['first' + nameKey])
    // console.log(lancer['last' + nameKey])

    // const interestedIn = prompt('What do you want to know about Lancer? Choose between firstName, lastName, age, job and friends.');
    
    // if (lancer[interestedIn]){
    //     console.log(lancer[interestedIn]);
    // } else {
    //     console.log('Wrong request! What do you want to know about Lancer? Choose between firstName, lastName, age, job and friends.');
    // }

    // // Adding new properties to object
    // lancer.location = 'Nigeria';
    // lancer['twitter'] = '@GentleMizt18';
    // console.log(lancer);

    // Exercise
    // "Jonas has 3 friends, and his best friend is named Micheal"


    
    // OBJECT METHODS
    // const lancer = {
    //     firstName: 'Abdulkareem',
    //     lastName: 'Mapelujo',
    //     birthYear: 2004,
    //     job: 'Web Developer',
    //     friends: ['tife', 'micheal', 'david'],
    //     hasDriversLicense: true,

        // any function thats in an object is called a METHOD
        // calcAge: function(birthYear){
        //     return 2023 - birthYear;
        // }

        // when the 'this' keyword is used in an object, it's invariably equal to the name of the object.
        // In the function expression below, 'this' refers to the object name lancer.
        // calcAge: function(){
        //     return 2023 - this.birthYear;
        // }

        // calcAge: function(){
        //     this.age = 2023 - this.birthYear;
        //     return this.age;
        // },
        // getSummary: function(){
        //     // if (this.hasDriversLicense === true) {
        //     //     console.log(`${this.firstName} is a ${this.age}-year old ${this.job}, and he has a driver's license.`);
        //     // } else if (this.hasDriversLicense === false){
        //     //     console.log(`${this.firstName} is a ${this.age}-year old ${this.job}, and he has no driver's license.`);
        //     // } else {
        //     //     console.log(`${this.firstName} refuses to supply information`);
        //     // }

        //     // ------------OR -------------------
        //     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense? 'a': 'no'} driver's license`

        // }
    // }

    // console.log(lancer.calcAge());
    // console.log(lancer.getSummary());

    
    // Coding Challenge 3

    // MY SOLUTION

    // const john = {
    //     fullName: 'John Smith',
    //     mass: 92,
    //     height: 1.95,
    //     calcBMI: function (){
    //         return this.mass / (this.height ** 2);
    //     }
    // }

    
    // const mark = {
    //     fullName: 'Mark Miller',
    //     mass: 78,
    //     height: 1.69,
    //     calcBMI: function (){
    //         let bmi = this.mass / (this.height **2);
    //         return bmi;
    //     }
    // }

    // console.log(john.calcBMI());
    // console.log(mark.calcBMI());
    // const greaterBmi = () =>{
    //     if (john.calcBMI() > mark.calcBMI()){
    //         console.log(`${john.fullName}'s BMI ${john.calcBMI()} is higher than ${mark.fullName}'s BMI ${mark.calcBMI()} `);
    //     } else if (mark.calcBMI() > john.calcBMI()){
    //         console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()}) `);
    //     } else{
    //         console.log(`Both have equal BMIs`);
    //     }
    // }

    // greaterBmi();

    // JONAS' SOLUTION

    // const john = {
    //     fullName: 'John Smith',
    //     mass: 92,
    //     height: 1.95,
    //     calcBMI: function (){
    //         this.bmi = this.mass / (this.height ** 2);
    //         return this.bmi
    //     }
    // }

    // const mark = {
    //     fullName: 'Mark Miller',
    //     mass: 78,
    //     height: 1.69,
    //     calcBMI: function (){
    //         this.bmi = this.mass / (this.height **2);
    //         return this.bmi;
    //     }
    // }
    // john.calcBMI();
    // mark.calcBMI();
    // console.log(mark.bmi);
    // console.log(john.bmi);

    // if (mark.bmi > john.bmi) {
    //     console.log(`${mark.fullName}'s BMI (${mark.bmi})} is higher than ${john.fullName}'s BMI (${john.bmi}) `);
    // } else if(john.bmi > mark.bmi) {
    //     console.log(`${john.fullName}'s BMI (${john.bmi})} is higher than ${mark.fullName}'s BMI (${mark.bmi}) `);
    // } else{
    //     console.log("Both have equal BMI's");
    // }


    // ITERATIONS THE FOR LOOP
    // Loops are part of the control structures like the 'If statement'

    // For Loops
    // console.log('Lifting weights repitition1');
    // console.log('Lifting weights repitition2');
    // console.log('Lifting weights repitition3');
    // console.log('Lifting weights repitition4');
    // console.log('Lifting weights repitition5');
    // console.log('Lifting weights repitition6');
    // console.log('Lifting weights repitition7');
    // console.log('Lifting weights repitition8');
    // console.log('Lifting weights repitition9');
    // console.log('Lifting weights repitition10');


    // for loops keep running while the condition is true!
    // for (let i = 1; i <= 10; i++) {
    //     console.log(`Lifting weights repitition ${i} `);   
    // }

    // looping through Arrays
  
    const lancerr = ['lancer', 18, false, 'Web developer', 2003, [1,2,3,'name']];
    let types = [];
    for (let i = 0; i < lancerr.length; i++) {
        // console.log(lancerr[i], typeof(lancerr[i]));

        // one way of filling an array
        // types[i] = typeof(lancerr[i]);

        // another way of filling an array
        types.push(typeof lancerr[i]);
    }

    // const birthYears = [2001, 2002, 2003, 2004, 2005]
    // let ages = [];

    // for (let i = 0; i < birthYears.length; i++) {
    //     let calcdAge = 2023 - birthYears[i];
    //     ages.push(calcdAge);
    // }

    // console.log(ages);

    // Two Important statements for loops

    // Continue: This is used to exit the current iteration of the loop and continue to the next one
    // Break: This is used to completely terminate the whole loop.

    // Continue and Break
    // console.log('--- ONLY STRINGS ---');
    // for (let i = 0; i < lancerr.length; i++) {
    //     // using the continue keyworrd
    //     // in this if statement, only the contents that has a typeOf value of 'string' would be logged
    //     if (typeof lancerr[i] !== 'string') continue;
    //     console.log(lancerr[i], typeof lancerr[i]);
    // }

    // console.log('--Break Out of the loop the moment you come accross a number--');
    // for (let i = 0; i < lancerr.length; i++) {
    //     // using the BREAK keyworrd
    //     // in this if statement, only the first number the loop comes across would be logged
    //     if (typeof lancerr[i] === 'number') break;
    //     console.log(lancerr[i], typeof lancerr[i]);
    // }


    // LOOPING BACKWARDS IN ARRAYS & LOOPING IN LOOPS

    // looping backwards
    // const olamide = ['lancer', 18, false, 'Web developer', 2003, [1,2,3,'name'], true];

    // for (let i = olamide.length - 1; i >= 0; i--){
    //     console.log(i, olamide[i]);
    // }

    // looping in loops

    // for (let exercise = 1; exercise < 4; exercise++) {
    //     console.log(`-------Starting exercise ${exercise} `);        
    //     for (let rep = 1; rep < 6; rep++) {
    //         console.log(`Exercise ${exercise}: Lifting weight repitiion ${rep} 🦾`);
    //     }
    // }

    // Quick Challenge!

    // let B = [90, 91, 92, 93, 94, 95];
    // let A = [96, 97, 98, 99, 100];
    // let C = [86, 87, 88, 89, 90];
    // let names = ['mariam', 'james', 'john', 'lancer']
    // for (let i = 0; i < A.length; i++) {
    //     for (let i = 0; i < names.length; i++) {
    //         if (A[i] >= 96 && A[i] <= 100){
    //             console.log(`${names[i]} has ${A[i]}`);
    //         }
    //     }
    // }

    // Another Approach

    const scores = [96,97, 98, 99,];
    const names = ['mariam', 'john', 'james', 'lancer'];

    // looping through both the scores and names arrays.
    for (let i = 0; i < scores.length; i++) {
        for (let i = 0; i < names.length; i++) {
            console.log(`${names[i]}: ${scores[i]}`);         
        }        
        // breaking out of the scores array loop because i only want it to print the scores and names once!
        break;
    }