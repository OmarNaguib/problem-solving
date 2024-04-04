/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let nBinary = "";
  let counter = 1;
  while (n > 0) {
    const remainder = n % (2 ** counter);
    if (remainder) {
      nBinary = "1" + nBinary;
      n -= 2 ** (counter - 1);
    } else {
      nBinary = "0" + nBinary;
    }
    counter++;
  }
  let count = 0;
  for (char of nBinary) if (char === "1") count += 1;
  return count;
};
