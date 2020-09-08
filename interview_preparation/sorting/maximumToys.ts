/**
 * Exercise: https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * @param prices Array with the prices of the toys
 * @param k Mark's budget
 */
function maximumToys(prices: Array<number>, k: number) {
  prices.sort((a, b) => a - b);// Take advantage of the native sort
  let count = 0;
  let quantity = 0;
  for (let i = 0; i < prices.length; i++) {
    count += prices[i];
    if (count > k) {
      break;
    }
    quantity++;
  }
  return quantity;
}
