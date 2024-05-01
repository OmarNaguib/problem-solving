/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let count2 = 0;
  let count5 = 0;
  for (let i = 1; i <= n; i++) {
    let temp = i;
    while (temp % 2 === 0) {
      count2++;
      temp /= 2;
    }
    while (temp % 5 === 0) {
      count5++;
      temp /= 5;
    }
  }
  return Math.min(count2, count5);
};