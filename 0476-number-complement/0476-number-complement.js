/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt("1".repeat(num.toString(2).length), 2) ^ num
};