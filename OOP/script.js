'use strict';

const Person = function(firstName, birthYear){
    // Instance properties.
    this.firstName = firstName,
    this.birthYear = birthYear

    // Never create a method inside a constructor function.
    // this.calcAge = function(){
    //     console.log(2023 - this.birthYear);
    // }
}

const lansa = new Person('Lancer', 2004);
console.log(lansa);
// when a function is called with the (new) keyworrd, 4 things happens behind the scene.
// 1. A new {} is created
// 2. function is then calleed, this = {}
// 3. {} linked to prototype
// 4. function automatically returns the {}

const mummyKay = new Person('Shaakirah', 1973);
const faiq = new Person('Faiq', 2005);
const faiza = new Person('Faiza', 2006);
const aliyah = new Person('Aliyah', 2017);
const matilda = new Person('Mathilda', 2017);
const jonas = 'jonas';

console.log(mummyKay, matilda, faiq, faiza, aliyah);

console.log(matilda instanceof Person);
console.log(jonas instanceof Person);


// PROTOTYPES
console.log(Person.prototype);
Person.prototype.calcAge = function(){
    console.log(2023 - this.birthYear);
}

// The reason why we have access to this calcAge function is because of PROTOTYPAL INHERITANCE
// This is the correct way of applying methods on objects created from constructor functions.
lansa.calcAge();
mummyKay.calcAge();

console.log(lansa.__proto__);
console.log(lansa.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'HomoSapiens';
console.log(lansa.species, matilda.species);

// Checking if an object property originally belongs to it
console.log(lansa.hasOwnProperty('firstName'));
console.log(lansa.hasOwnProperty('species'));


console.log(lansa.__proto__);
console.log(lansa.__proto__.__proto__);
console.log(lansa.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2,4,6,8,10,12]
console.log(arr.__proto__ === Array.prototype);