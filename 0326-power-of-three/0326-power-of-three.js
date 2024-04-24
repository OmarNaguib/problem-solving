/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    const logToBaseOf3 = Math.log(n)/Math.log(3)
    return Math.abs(logToBaseOf3 - Math.round(logToBaseOf3)) < 1e-10
    
};