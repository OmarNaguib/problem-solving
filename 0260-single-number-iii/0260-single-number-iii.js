/**
 * @param {number[]} nums
 * @return {number[]}
 */
// needed a hint to solve it
var singleNumber = function (nums) {
  const xor = nums.reduce((total, curr) => total ^ curr);
  let setBitMask = xor & -xor;
  const xorOfSet = nums.reduce(
    (total, curr) => (setBitMask & curr ? total ^ curr : total),
    0
  );
  return [xorOfSet, xor ^ xorOfSet];
};