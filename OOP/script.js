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

const arr = [1,1,1,2,2,2,4,5,6,10,12,23,23,24,54,45,22,22,4,6,8,10,12]
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
   return [...new Set(this)]
}

console.log(arr.unique());

const h1 = document.querySelector('h1')
console.dir(x => x + 1 )

// CODING CHALLENGE 1

// 1.
const car = function(make, speed){
    this.make = make,
    this.speed = speed
}

// 2. Implementing the accelerate method
car.prototype.accelerate = function(){
   const accelSpeed = this.speed += 10;
   console.log(`${accelSpeed}Km/hr`);
}

// 3. Implementing the brake method.
car.prototype.brake = function(){
    const decelSpeed = this.speed -= 5;
    console.log(`${decelSpeed}Km/hr`);
}

const car1 = new car('BMW', 120)
const car2 = new car('Mercedes', 95)
console.log(car1, car2);

car1.accelerate()
car1.brake()
car1.brake()
car2.accelerate()
car2.brake()


// ES6 CLASSES //

// Class Expressions
// const PersonCl = class {

// }

// Class declaration
class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName,
        this.birthYear = birthYear
    }

    // Methods will be added to the .prototype property.
    calcAge(){
        console.log(2023 - this.birthYear);
    }

    greet(){
        console.log(`Hey there ${this.firstName}, how are you doing?`);
    }

    get age(){
        return 2023 - this.birthYear;
    }

    set fullName(name){
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName(){
        return this._fullName;
    }
}

const tobi = new PersonCl('Taheer Tobi', 2003);
console.log(tobi);
tobi.calcAge()
tobi.greet();
console.log(tobi.age);


console.log(tobi.__proto__ === PersonCl.prototype);

// Manually adding the method to the prototype property.
// PersonCl.prototype.greet = function (){
//     console.log(`Hey ${this.firstName}`);
// }
// tobi.greet();

// Some important things to take note of when making use of classes.
// 1. Classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode.


// SETTERS AND GETTERS
const account = {
    owner: 'Jonas',
    movements: [200, 300, 400, 230, 119],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);
    }
}

console.log(account.latest);
account.latest = 450;
console.log(account.movements);
