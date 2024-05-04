/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  const sorted = people.sort((a, b) => a - b);
  let fattest = sorted.length - 1, boats = 0;
  while (fattest >= 0) {
    let left = 0, fattestFit = -1;
    while (true) {
      if (sorted[fattest] + sorted[left] > limit || left === fattest) {
        if (fattestFit !== -1) {
          sorted.splice(fattestFit, 1);
          fattest--;
        }
        fattest--;
        boats++;
        break;
      } else {
        fattestFit = left;
        left++;
      }
    }
  }
  return boats;
};
    
//     fatest
//     fatestFit
    