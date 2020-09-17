const assert = require('assert');

function countingValleys(n, s) {
  let countValley = 0;
  let inValley = false;
  let currentPos = 0;
  for (let char of s) {
    if (char == 'U') {
      currentPos++;
    } else {
      currentPos--;
    }
    if (currentPos < 0 && !inValley) {
      countValley++;
      inValley = true;
    } else if (currentPos >= 0 && inValley) {
      inValley = false;
    }
  }
  return countValley;
}

assert.strictEqual(countingValleys(8, 'UDDDUDUU'), 1);
assert.strictEqual(countingValleys(12, 'DDUUDDUDUUUD'), 2);
