/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    
      if (divisor === 1) return dividend > 2**31 - 1 ? 2**31 - 1 : dividend;
  if (divisor === -1) return dividend === -(2**31) ? 2**31 - 1 : -dividend;

  const isNegative = Math.sign(dividend) + Math.sign(divisor) === 0;
  let absDividend = Math.abs(dividend),
    absDivisor = Math.abs(divisor);
  let result = 0;
  while (absDividend >= absDivisor) {
    let currentDiviosr = absDivisor;
    let count = 0;
    while (absDividend >= currentDiviosr << 1 && (currentDiviosr << 1) > 0) {
      currentDiviosr <<= 1;
      count++;
    }
    result += 1 << count;
    absDividend -= currentDiviosr;

    if (result > 2**31 -1 && !isNegative) return  2**31 -1
    if (result > 2**31 && isNegative) return  2**31
  }
  if (isNegative) return ~result + 1;
  return result;
};