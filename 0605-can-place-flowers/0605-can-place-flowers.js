/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n===0) return true
  if (flowerbed.length===1) return flowerbed[0] === 0 && n<=1
  let count = 0;
  let i = 0;
  if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i]=1
      count++
  };
  for (i = 1; i < flowerbed.length - 2; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i - 1] === 0
    ) {
      count++;
      flowerbed[i] = 1;
    }
  }

  if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) count++;
  return count >= n;
};

