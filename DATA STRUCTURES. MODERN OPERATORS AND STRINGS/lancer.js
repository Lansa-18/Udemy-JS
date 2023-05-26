'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex , mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
};

// DESTRUCTURING ARRAYS

// Retrieving elements normally
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring the array
const [x,y,z] = arr; 
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
[main, secondary] = [secondary, main]
// console.log(main, secondary, '(SWITCHED)');

// RECEIVING 2 RETURN VALUES FROM A FUNCTION
const [starterCourse, mainCourse] = restaurant.order(2,0);
// console.log(starterCourse, mainCourse);

const nested = [2, 4, [5, 6]];

// Destructuring the array to give just 2 and the array [5,6]
// const [i, ,j] =  nested;
// console.log(i,j);

// Destructuring an array([5,6]) inside a destructuring that's already ongoing([2,4,[5,6]]), to get 2,5,6 as individual elements.
const [i, , [j, k]] = nested;
// console.log(i,j,k);

// Using Destructuring to set default values of the destructured element
const [p=1 ,q=1, r=1] = [8];
// console.log(p,q,r);