const assert = require('assert');

function repeatedString(s, n) {
  let countA = 0;
  let quantity = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === 'a') {
      countA++;
    }
    quantity[i] = countA;
  }
  const capacity = Math.trunc(n / s.length);
  const remainder = n % s.length;
  let total = capacity * countA;
  if (remainder > 0) {
    total += quantity[remainder - 1];
  }
  return total;
}

assert.strictEqual(repeatedString('aba', 10), 7);
assert.strictEqual(repeatedString('a', 1000000000000), 1000000000000);
