const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'lansa' },
  { value: -45, description: 'Groceries 🥑', user: 'lansa' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'lansa' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'lansa' },
  { value: -1100, description: 'New iPhone 📱', user: 'lansa' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'lansa' },
];

const spendingLimits = {
  lansa: 1500,
  matilda: 100,
};

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'lansa') {
  user = user.toLowerCase();
  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
logBigExpenses(500);

console.log(budget);
