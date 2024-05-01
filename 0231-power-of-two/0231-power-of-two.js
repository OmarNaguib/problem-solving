/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n<0) return 0
    return n.toString(2).split("").filter(char=>char==="1").length === 1
};