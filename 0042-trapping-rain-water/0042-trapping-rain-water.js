/**
 * @param {number[]} height
 * @return {number}
 */

const trap = function (height) {
  const maxHeight = [];
  maxHeight[height.length - 1] = 0;
  maxHeight[height.length - 2] = height[height.length - 1];
  for (let j = height.length - 3; j >= 0; j -= 1) {
    maxHeight[j] = Math.max(height[j + 1], maxHeight[j + 1]);
  }
  let right = maxHeight[0];
  let left = 0;
  let count = 0;
  for (let i = 0; i < height.length; i += 1) {
    if (height[i] < left && height[i] < right) {
      right = maxHeight[i];
      count += Math.max(0, Math.min(right, left) - height[i]);
    }
    if (height[i] > left) left = height[i];
  }
  return count;
};