/**
 * Exercise: https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * @param a Array of integers
 */
function countSwaps(a: Array<number>) {
  let numSwaps = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        numSwaps++;
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }

  }
  process.stdout.write(`Array is sorted in ${numSwaps} swaps.\n`);
  process.stdout.write(`First Element: ${a[0]}\n`);
  process.stdout.write(`Last Element: ${a[a.length - 1]}\n`);
}

countSwaps([3, 2, 1]);
countSwaps([1, 2, 3]);
