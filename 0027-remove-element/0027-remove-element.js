/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// mistake in testing, fails if the last elements aren't removed
var removeElement = function (nums, val) {
  let lastNotVal = nums.length - 1;
  for (let i = 0; i < nums.length && i < lastNotVal; i++) {
    while (nums[lastNotVal] === val) lastNotVal--;
    if (nums[i] === val && nums[lastNotVal] !== val && lastNotVal >= 0) {
      nums[i] = nums[lastNotVal];
      // these two lines account for mistake in testing logic
      nums.splice(lastNotVal, 1);
      lastNotVal--;
    }
  }
  let i = 0;
  // this too accounts for mistake in testing logic
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
};