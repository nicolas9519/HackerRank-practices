import assert from 'assert';
/**
 * Find the maximum value following the instructions in the query
 * Exercise: https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * @param n Quantity of elements in the array
 * @param queries Instructions
 * @returns Maximum number
 */
function arrayManipulation(n: number, queries: Array<Array<number>>): number {
  const arr = new Array(n);
  let max = -Infinity;
  for (const instructions of queries) {
    const [a, b, k] = instructions;
    arr[a - 1] = (arr[a - 1] || 0) + k;
    arr[b] = (arr[b] || 0) - k;
  }
  let temp = 0;
  for (const value of arr) {
    if (!value) continue;
    temp += value;
    max = Math.max(temp, max);
  }
  return max;
}

const queries = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100]
];

assert.deepEqual(arrayManipulation(5, queries), 200);
