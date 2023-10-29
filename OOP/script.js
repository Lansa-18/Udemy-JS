'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties.
//   (this.firstName = firstName), (this.birthYear = birthYear);

//   // Never create a method inside a constructor function.
//   // this.calcAge = function(){
//   //     console.log(2023 - this.birthYear);
//   // }
// };

// const lansa = new Person('Lancer', 2004);
// console.log(lansa);
// when a function is called with the (new) keyworrd, 4 things happens behind the scene.
// 1. A new {} is created
// 2. function is then calleed, this = {}
// 3. {} linked to prototype
// 4. function automatically returns the {}

// const mummyKay = new Person('Shaakirah', 1973);
// const faiq = new Person('Faiq', 2005);
// const faiza = new Person('Faiza', 2006);
// const aliyah = new Person('Aliyah', 2017);
// const matilda = new Person('Mathilda', 2017);
// const jonas = 'jonas';

// console.log(mummyKay, matilda, faiq, faiza, aliyah);

// console.log(matilda instanceof Person);
// console.log(jonas instanceof Person);

// Person.hey = function () {
//   // console.log('Hey there (❁´◡`❁)(❁´◡`❁)');
//   // console.log(this);
// };

// Person.hey();
// lansa.hey();

// PROTOTYPES
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   // console.log(2023 - this.birthYear);
// };

// The reason why we have access to this calcAge function is because of PROTOTYPAL INHERITANCE
// This is the correct way of applying methods on objects created from constructor functions.
// lansa.calcAge();
// mummyKay.calcAge();

// console.log(lansa.__proto__);
// console.log(lansa.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'HomoSapiens';
// console.log(lansa.species, matilda.species);

// Checking if an object property originally belongs to it
// console.log(lansa.hasOwnProperty('firstName'));
// console.log(lansa.hasOwnProperty('species'));

// console.log(lansa.__proto__);
// console.log(lansa.__proto__.__proto__);
// console.log(lansa.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [
  1, 1, 1, 2, 2, 2, 4, 5, 6, 10, 12, 23, 23, 24, 54, 45, 22, 22, 4, 6, 8, 10,
  12,
];
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

const h1 = document.querySelector('h1');
// console.dir(x => x + 1 )

// CODING CHALLENGE 1

// 1.
// const car = function (make, speed) {
//   (this.make = make), (this.speed = speed);
// };

// // 2. Implementing the accelerate method
// car.prototype.accelerate = function () {
//   const accelSpeed = (this.speed += 10);
//   // console.log(`${accelSpeed}Km/hr`);
// };

// // 3. Implementing the brake method.
// car.prototype.brake = function () {
//   const decelSpeed = (this.speed -= 5);
//   // console.log(`${decelSpeed}Km/hr`);
// };

// const car1 = new car('BMW', 120);
// const car2 = new car('Mercedes', 95);
// console.log(car1, car2);

// car1.accelerate()
// car1.brake()
// car1.brake()
// car2.accelerate()
// car2.brake()

// ES6 CLASSES //

// Class Expressions
// const PersonCl = class {

// }

// Class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     (this.fullName = fullName), (this.birthYear = birthYear);
//   }

//   /// INSTANXE METHIDS ///
//   // Methods will be added to the .prototype property.
//   calcAge() {
//     // console.log(2023 - this.birthYear);
//   }

//   greet() {
//     // console.log(`Hey there ${this.firstName}, how are you doing?`);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   // Pattern for setting a property that already exists.
//   set fullName(name) {
//     // console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static Methods
//   static hey() {
//     // console.log('Hello there 😊😊');
//     // console.log(this);
//   }
// }

// PersonCl.hey()

// const tobi = new PersonCl('Taheer Tobi', 2003);
// console.log(tobi);
// tobi.calcAge()
// tobi.greet();
// console.log(tobi.age);
// console.log(tobi.__proto__ === PersonCl.prototype);

// Manually adding the method to the prototype property.
// PersonCl.prototype.greet = function (){
//     console.log(`Hey ${this.firstName}`);
// }
// tobi.greet();

// Some important things to take note of when making use of classes.
// 1. Classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode.

// const tolani = new PersonCl('Baba Coffee', 1990);

// SETTERS AND GETTERS
const account = {
  owner: 'Jonas',
  movements: [200, 300, 400, 230, 119],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);
account.latest = 450;
// console.log(account.movements);

// Object.Create()

// Creating the object that would serve as the prototype for all the object we'll be creating
// const PersonProto = {
//   calcAge() {
//     // console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// console.log(steven);
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 2000);
// sarah.calcAge();

// CODING CHALLENGE NO2

// class CarCl {
//   constructor(make, speed) {
//     (this.make = make), (this.speed = speed);
//   }

//   accelerate2() {
//     const accelSpeed2 = (this.speed += 10);
//     // console.log(`${accelSpeed2}km/hr`);
//   }

//   decelerate2() {
//     const decelSpeed2 = (this.speed -= 5);
//     // console.log(`${decelSpeed2}km/hr`);
//   }

//   get speedUS() {
//     return `${this.speed / 1.6}mi/hr`;
//   }

//   set speedUS(curSpeed) {
//     this.speed = curSpeed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford);

// console.log(ford.speedUS);

// ford.accelerate2();
// ford.decelerate2();
// ford.speedUS = 50;

// console.log(ford);

//////////////////////////////////////////// INHERITANCE BETWEEN CLASSES /////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   // Instance properties.
//   (this.firstName = firstName), (this.birthYear = birthYear);

//   Person.prototype.calcAge = function () {
//     console.log(2023 - this.birthYear);
//   };
// };

// // creating a class that would be a child class from the parent class.
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Linking Prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };

// const mike = new Student('Mike', 2003, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//////////////////// CODING CHALLENGE NO3  /////////////////////////////////////////////

// Step 1
// const Car = function (make, speed) {
//   (this.make = make), (this.speed = speed);
// };

// 2. Implementing the accelerate method
// Car.prototype.accelerate = function () {
//   const accelSpeed = (this.speed += 10);
//   console.log(`${accelSpeed}Km/hr`);
// };

// 3. Implementing the brake method.
// Car.prototype.brake = function () {
//   const decelSpeed = (this.speed -= 5);
//   console.log(`${decelSpeed}Km/hr`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// Linking the Prototype Properties
// EV.prototype = Object.create(Car.prototype);

// Step 2
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// const tesla = new EV('Tesla', 120, 0.23);
// console.log(tesla);

// Step 3
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 0.01;
//   console.log(
//     `Tesla going at ${this.speed}km/hr, with a charge of ${Math.round(this.charge * 100)}%`
//   );
// };

// Step 4 - (EXPERIMENTING!!!)
// EV.prototype.constructor = EV;
// tesla.accelerate();
// console.log(tesla);

// tesla.chargeBattery(0.9);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();


////////////////// INHERITANCE BETWEEN CLASSES : ES6 CLASSES ///////////////////////////

class PersonCl {
  constructor(fullName, birthYear) {
    (this.fullName = fullName), (this.birthYear = birthYear);
  }

  /// INSTANCE METHODS ///
  // Methods will be added to the .prototype property.
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    // console.log(`Hey there ${this.firstName}, how are you doing?`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Pattern for setting a property that already exists.
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Methods
  static hey() {
    // console.log('Hello there 😊😊');
    // console.log(this);
  }
}

class StudentCl extends PersonCl{
  constructor(fullName, birthYear, course){
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge(){
    console.log(`I am ${2023 - this.birthYear} years old, but as a student, i feel more like I'm ${2023 - this.birthYear + 10} years`);
  }
}

const martha = new StudentCl('Martha Jones', 1989, 'Computer Science')
martha.introduce()
martha.calcAge()


/////// INHERITANCE BETWEEN CLASSES : OBJECT.CREATE ////////////

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear, course);
  this.course = course;
}

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'MicroBiology');

jay.introduce()
jay.calcAge()


//////////////////////////////// OTHER CLASS EXAMPLES ////////////////////////////////////



class Account{
  // 1. Public Fields (INSTANCES)
  locale = navigator.language;
  
  // 2. Private Fields 
  #movements = [];
  #pin;

  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    
    // Protected Property (This is just a convention as the data isn't truly Private.)
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}!!`);
  }

  // The Public Interface of our object. (3. PUBLIC METHODS)
  getMovements(){
    return this.#movements
  }

  deposit(val){
    this.#movements.push(val);
    return this;
  }

  requestLoan(val){
    if(this.#approveLoan(val)){
      this.deposit(val);
      console.log(`Loan Successfully Approved`);
    }
    return this;
  }

  withdrawal(val){
    this.deposit(-val);
    return this;
  }

  // 4. PRIVATE METHODS
  #approveLoan(val){
    return true;
  }
}

const acc1 = new Account('Lansa', 'EUR', 2830);

// NOTE IT IS BAD TO INTERACT WITH AN OBJECT LIKE THIS IN OOP
// acc1.movements.push(250);
// acc1.movements.push(-100);

// It is a lot better to create methods that interacts with these properties.
acc1.deposit(250);
acc1.withdrawal(140)
acc1.requestLoan(2000)
console.log(acc1);
console.log(acc1.getMovements());
// console.log(acc1.#pin);

// ENCAPSULATION: PROTECTED PROPERTIES AND METHODS.

// ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS.
// The 4 fieds we'll be focusing on

// 1. Public Fields
// 2. Private Fields
// 3. Public Methods
// 4. Private Methods
// (there is also the static version of the above 4): They are majorly used for helper functions as they would not be available on all the instances, only on the class itself.


/////// CHAINING METHODS //////////////

acc1.deposit(300).deposit(500).withdrawal(50).requestLoan(25000).withdrawal(4000);

// CODING CHALLENGE NO 4

// references

class CarCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }

  accelerate2() {
    const accelSpeed2 = (this.speed += 10);
    console.log(`${accelSpeed2}km/hr`);
    return this;
  }

  brake() {
    const decelSpeed2 = (this.speed -= 5);
    console.log(`${decelSpeed2}km/hr`);
    return this;
  }

  get speedUS() {
    return `${this.speed / 1.6}mi/hr`;
  }

  set speedUS(curSpeed) {
    this.speed = curSpeed * 1.6;
  }
}


// STEP 1
class EVCL extends CarCl{
  #charge;
  constructor(make, speed, charge){
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery (chargeTo) {
  this.#charge = chargeTo / 100;
  return this;
};

}

const rivian = new EVCL('Rivian', 120, 0.23)
console.log(rivian.accelerate2().brake().chargeBattery(50));
// console.log(rivian);
