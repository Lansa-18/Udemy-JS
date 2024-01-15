'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'lansa' },
  { value: -45, description: 'Groceries 🥑', user: 'lansa' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'lansa' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'lansa' },
  { value: -1100, description: 'New iPhone 📱', user: 'lansa' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'lansa' },
]);

const spendingLimits = Object.freeze({
  lansa: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'lansa'
) {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);

const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'} : entry
  })
};
const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state.filter(entry => entry.value <= -bigLimit).map(entry => entry.description.slice(-2)).join(' / ');
  console.log(bigExpenses);
};
logBigExpenses(finalBudget, 500);

