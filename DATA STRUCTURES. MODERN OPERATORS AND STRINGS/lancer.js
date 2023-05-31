'use strict';

const weekdays2 = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays2[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays2[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays2[5]]: {
    open: 0, // open: 24hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //   ES6 ENHANCED OBJECT LITERALS
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Application of Object Destructuring.
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //   Application of the Spread Operator in Functions
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
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
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

// Setting default values is helpful especially in cases where date aren't HARDCODED
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // The code was wrapped in parenthesis because when beginning a javascript line with curly brackets, it expects a code block
// console.log(a,b);

// NESTED OBJECTS DESTRUCTURING
const {
  fri: { open, close },
} = openingHours;
// console.log(open, close);

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

//  ///////////////////////////////////////////////////// ---------------------------- SPREAD OPERATOR -------------------------- /////////////////////////////////////////////////////////////////////////////
const arr = [7, 8, 9, 10];
const newArr = [1, 2, ...arr];
// console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// USE CASES OF THE SPREAD OPERATOR
// 1. Creating Shallow Copies of an Array
const mainMenuCopy = [...restaurant.mainMenu];

// 2. Merging arrays together
const menuCopies = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuCopies);

// Iterables are arrays, strings, maps, sets and NOT objects.
const str = 'lancer';
const letters = [...str, '', 's.'];
// console.log(letters);

// Real World Example, Application of the Spread Operator from LINE 33.
const ingredients = [
  //   prompt("Let's make pasta! Ingredient 1?"),
  //   prompt("Let's make pasta! Ingredient 2?"),
  //   prompt("Let's make pasta! Ingredient 3?"),
];
// console.log(ingredients);

// Application of the Spread Operator from LINE 33.
// restaurant.orderPasta(...ingredients);

// APPLYING THR SPREAD OPERATOR ON OBJECTS
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// //////////////////////////////////////////// ------------------------------- REST PATTERN AND REST PARAMETERS --------------------------------- ////////////////////////////////////

//  1. REST IN DESTRUCTURING (IN THIS CASE , IT IS CALLED REST PATTERNS)

// REST IN ARRAYS
// SPREAD, because the '...' is on the right hand side of the assignment operator(=)
const arr2 = [1, 2, ...[3, 4]];

// REST, because the '...' is on the left hand side of the assignment operator(=)
const [d, e, ...others] = [1, 2, 3, 4, 5];
// console.log(d,e,others);

const [pizza, , rizzoto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, rizzoto, otherFoods);

// REST IN OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//  2. REST IN FUNCTIONS (IN THIS CASE , IT IS CALLED REST PARAMETERS)
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(24, 33, 53534, 53, 534, 53, 34);

const x = [23, 5, 7];
add(...x);

// Using the Rest Operator in methods
// restaurant.orderPizza('Mushrooms', 'Onions', 'Olive', 'Chicken', 'Spinach');

///////////////////////////////////////////////////// --------------------- SHORT CIRCUITING (&& AND ||) ------------ //////////////////////////////////////////////////////////////////////////////////

// PROPERTIES OF LOGICAL OPERATORS
// They USE any data type, RETURN any data type and short-circuiting.
// console.log('----------- OR ------------------- ');
// console.log(3 || 'lancer');
// console.log('' || 'lancer');
// console.log(true || 0);
// console.log(undefined || null); // Undefined and null are both falsy values, but because the first operand was false, it automatically returned the second operand which is 'null', even though it is also a falsy value.

// console.log(undefined || 0 || '' || 'hello' || 23); // In this scenario, 'hello' gets outputed because, all the other operands b4 it were false, and the moment it met the condition (truthy value), it got short-circuited and it got outputed.

// Application of Short-circuiting in the || (OR) operator
// restaurant.numGuests = 40;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;  // TERNARY OPERATOR
// console.log(guests1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('----------- AND ------------------- ');
// console.log(0 && 'jonas');
// console.log(7 && 'jonas');
// console.log(12 && 'lancer' && true && undefined && 23);

// Apllication  of Short-circuiting in the && (AND) operator
// if(restaurant.orderPizza){
//     restaurant.orderPizza('Mushrooms', 'Chicken');
// }

// restaurant.orderPizza && restaurant.orderPizza('Chicken', 'Spinach')

// THE NULLISH COALESCING OPERATOR(??)restaurant.numGuests = 40;
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
// console.log(guest);

// Nullish Values are: Null and Undefined. (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/////////////////// --------------- LOGICAL ASSIGNMENT OPERATOR -------------------- //////////////////////
const rest1 = {
  name: 'Capri',
  //   numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Mapelujo Abdulkareem',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH COALESCING operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

/////////// ------------- CODING CHALLENGE #1 ---------------- //////////////////

// GIVEN DATA
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];

// 4.
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.
const { team1, x: draw, team2 } = game.odds; //OR
// const {odds: {team1, x:draw, team2}} = game;

// 6.
const printGoals = function (...players) {
  //   console.log(`${players} scored goals`);
  //   console.log(`${players.length} goals were scored`);
};

printGoals('Lewandoskie', 'Davies', 'Muller', 'Kimmich');
printGoals(...game.scored);

// 7.
// team1 < team2 && console.log('Team1 is more likely to win');
// team1 > team2 && console.log('Team2 is more likely to win');

////////////////////// ------------------ CODING CHALLENGE #2 ------------------------- ////////////////////////
// continuation from THE FIRST CODING CHALLENGE.
// 1.
for (const [i, el] of game.scored.entries()) {
  //   console.log(`Goal ${i + 1}: ${el}`);
}

// 2. Calculating the averages
const oddValues = Object.values(game.odds);
let sum = 0;
let avgOdds = 0;
for (const average of oddValues) {
  sum += average;
  avgOdds = sum / oddValues.length;
}

// 3.
const gameEntries = Object.entries(game.odds);
for (const [team, odd] of gameEntries) {
  const teamString = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  //   console.log(`Odd of ${teamString}: ${odd}`);
}

// BONUS:
const scoresObj = {};
for (const name of game.scored) {
  if (scoresObj[name]) {
    scoresObj[name] += 1;
  } else {
    scoresObj[name] = 1;
  }
}
// console.log(scoresObj);

/////////////////// -------------- LOOPING ARRAYS: THE FOR-OF LOOPS ------------------ ////////////////////////
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu2) console.log(item); // The 'for-of' loop basically gives you the current element in each iteration of whatever you are looping through.

// To get the current Index, this is how it's done;
for (const [i, el] of menu2.entries()) {
  // console.log(`${i+1}: ${el}`);
}
// console.log(...menu2.entries());

// //////////////////////////// ------------------- OPTIONAL CHAINING  ------------------------ /////////////////////////////////////
// console.log(restaurant.openingHours.mon.open);

// With Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  //   console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining on Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method Does not exist');
// console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method Does not exist');

// Optional Chaining on Arrays
const users = [
  { name: 'lancer', email: 'olamideiyanda18@gmail.com' },
  { name: 'mizt', email: 'olamideiyanda20@gmail.com' },
];

// console.log(users[0]?.name ?? 'User Array Empty');
// console.log(users[2]?.name ?? 'User Array Empty');

////////////////////// --------------------- LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES ---------------------------- ///////////////////////////////////////////
// NOTE: OBJECTS ARE NOT ITERABLES

// looping over property names, (KEYS);
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
// console.log(openStr);

// looping over property values, (VALUES);
const values = Object.values(openingHours);
// console.log(values);

// To loop over the entire object, we need to make use of the entries. ENTRIES contain both the Keys and the values.
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  // console.log(`On ${day} we open ${open} and close at ${close}`);
}

/////////////////////////// ------------------------- SETS --------------------------------------- /////////////////////////////////////
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Risotto',
  'Pizza',
  'Pasta',
  'Pizza',
]);
// console.log(ordersSet);

// console.log(new Set('Nabasf'));

// Checking the amount of items in a set
// console.log(ordersSet.size);

// Checking if an item is in a set
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// To add an item into a set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// Removing / Deleting items from a set.
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// To delete all of the elements in a set
// ordersSet.clear();
// console.log(ordersSet);

// Since sets are iterables, we can loop through them
// for (const order of ordersSet) console.log(order);

// An example use case of sets
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// To convert a set into an array, it should be wraaped in an array literal and then making use of the spread operator to unpack it.
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(staffUnique.length);

//////////////////////////////// --------------------- MAPS --------------------------------- //////////////////////////
