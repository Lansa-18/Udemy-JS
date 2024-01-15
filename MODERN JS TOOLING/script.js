// Importing Module
// import {addToCart, totalPrice as price, tq} from'./shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing Module');

// import * as ShoppingCart from './shoppingCart.js'; // Import everything from shoppingCart.js
// ShoppingCart.addToCart('bread', 10)
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// import add, {addToCart, totalPrice as price, tq} from './shoppingCart.js'; // Import default export from shoppingCart.js
// import add, { cart } from './shoppingCart.js'; // Import default export from shoppingCart.js
// add('pizza', 2);
// add('bread', 5);
// add('apples', 15);

// console.log(cart);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json();
// console.log(data[0]);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = await res.json();
// //   console.log(data[0]);
//   return {title: data.at(-1).title, text: data.at(-1).body}
// };
// const lastPost = getLastPost();
// console.log(lastPost);

// const lastPost2 = await getLastPost(); 
// console.log(lastPost2);

import clone from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 5 },
    ],
    user: { loggedIn: true },
}

const stateClone = Object.assign({}, state);
const stateDeepClone = clone(state);
console.log(stateClone);

state.user.loggedIn = false;

console.log(stateDeepClone);