const assert = require('assert');

function jumpingOnClouds(c) {
  let currentPos = 0;
  let jumps = 0;
  while (currentPos < c.length - 1) {
    let step = currentPos;
    if (c[step + 2] === 0) {
      step += 2;
    } else {
      step++;
    }
    currentPos = step;
    jumps++;
  }
  return jumps;
}

assert.strictEqual(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), 4);
assert.strictEqual(jumpingOnClouds([0, 0, 0, 1, 0, 0]), 3);
