const assert = require('assert');

function numberPairs(n, ar) {
  const frequency = {};
  let counter = 0;
  for (const number of ar) {
    frequency[number] = (frequency[number] || 0) + 1;
    if (frequency[number] % 2 === 0) counter++;
  }
  return counter;
}

assert.strictEqual(numberPairs(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);
assert.strictEqual(numberPairs(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]), 6);
