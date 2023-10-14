'use strict';

const Person = function(firstName, birthYear){
    // Instance properties.
    this.firstName = firstName,
    this.birthYear = birthYear,

    this.calcAge = function(){
        console.log(2023 - this.birthYear);
    }
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