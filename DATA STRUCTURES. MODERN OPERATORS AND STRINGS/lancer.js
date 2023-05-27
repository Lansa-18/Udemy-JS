'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open: 24hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Application of Object Destructuring.
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

//   Application of the Spread Operator in Functions
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  }
};

// When the method is called, we pass in the object as a parameter and it would be automatically destructured.
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2
// })

// restaurant.orderDelivery({
//     address: 'Via del Sole, 21',
//     starterIndex: 1
// })

// OBJECT DESTRUCTURING
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

// Setting default values is helpful especially in cases where date aren't HARDCODED
const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a,b} = obj); // The code was wrapped in parenthesis because when beginning a javascript line with curly brackets, it expects a code block
// console.log(a,b);

// NESTED OBJECTS DESTRUCTURING
const {fri: {open, close}} = openingHours;
// console.log(open, close);


// SPREAD OPERATOR
const arr = [7,8,9,10];
const newArr = [1,2, ...arr];
console.log(...newArr);


const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// USE CASES OF THE SPREAD OPERATOR
// 1. Creating Shallow Copies of an Array
const mainMenuCopy = [...restaurant.mainMenu];

// 2. Merging arrays together
const menuCopies = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuCopies);

// Iterables are arrays, strings, maps, sets and NOT objects.
const str = 'lancer';
const letters = [...str, '', 's.']
console.log(letters);

// Real World Example, Application of the Spread Operator from LINE 33.
const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')]
// console.log(ingredients);

// Application of the Spread Operator from LINE 33.
restaurant.orderPasta(...ingredients);

// OB


























////////////////////////////////////////////////////////////////////////////
// DESTRUCTURING ARRAYS
// Retrieving elements normally
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

//Destructuring the array
// const [x, y, z] = arr;
// console.log(x,y,z);
// console.log(arr);

let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching up the order of the items normally
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary, '(SWITCHED)');

// Switching up the order of the item with the aid of destructuring
[main, secondary] = [secondary, main];
// console.log(main, secondary, '(SWITCHED)');

// RECEIVING 2 RETURN VALUES FROM A FUNCTION
const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.log(starterCourse, mainCourse);

const nested = [2, 4, [5, 6]];

// Destructuring the array to give just 2 and the array [5,6]
// const [i, ,j] =  nested;
// console.log(i,j);

// Destructuring an array([5,6]) inside a destructuring that's already ongoing([2,4,[5,6]]), to get 2,5,6 as individual elements.
const [i, , [j, k]] = nested;
// console.log(i,j,k);

// Using Destructuring to set default values of the destructured element
const [p = 1, q = 1, r = 1] = [8];
// console.log(p,q,r);
