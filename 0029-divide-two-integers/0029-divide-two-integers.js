var divide = function (dividend, divisor) {
  if (divisor === 0) return 2**31 - 1; // prevent division by zero
  if (dividend === 0) return 0; // quick return if no division needed
  if (divisor === 1) return dividend > 2**31 - 1 ? 2**31 - 1 : dividend;
  if (divisor === -1) return dividend === -(2**31) ? 2**31 - 1 : -dividend; // handle overflow

  const isNegative = Math.sign(dividend) + Math.sign(divisor) === 0;
  let absDividend = Math.abs(dividend),
      absDivisor = Math.abs(divisor);
  let result = 0;

  while (absDividend >= absDivisor) {
    let currentDivisor = absDivisor;
    let count = 0;
    while ((currentDivisor << 1) <= absDividend && (currentDivisor << 1) > 0) {
      currentDivisor <<= 1;
      count++;
    }
    result += 1 << count;
    absDividend -= currentDivisor;

    if (result >= 2**31 && !isNegative) return 2**31 - 1;
    if (result > 2**31 && isNegative) return -(2**31);
  }

  return isNegative ? -result : result;
};