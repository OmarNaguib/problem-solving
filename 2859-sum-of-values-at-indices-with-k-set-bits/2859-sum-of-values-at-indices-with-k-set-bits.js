/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  return nums.reduce((total, num, index) => {
    let count = 0;
    const binary = index.toString(2);
    for (char of binary) if (char === "1") count++;
    if (count === k) return (total += num);
    return total;
  }, 0);
};