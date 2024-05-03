/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const hashNums = {};
  const hashFreq = {};
  for (num of nums) {
    if (num % 2 !== 0) continue;
    const oldFreq = hashNums[num];
    if (!oldFreq) {
      hashNums[num] = 1;
      hashFreq[1] ? hashFreq[1].push(num) : (hashFreq[1] = [num]);
      continue;
    }
    const oldArray = hashFreq[oldFreq];
    oldArray.splice(oldArray.indexOf(num), 1);
    hashNums[num] += 1;
    hashFreq[oldFreq + 1]
      ? hashFreq[oldFreq + 1].push(num)
      : (hashFreq[oldFreq + 1] = [num]);
  }
  const keys = Object.keys(hashFreq);
  if (!keys.length) return -1;
  const maxFrequency = Math.max(...keys);
  return Math.min(...hashFreq[maxFrequency]);
};