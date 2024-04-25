/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const reversed = n.toString(2).split("").reverse()
    reversed.push(...Array(32-reversed.length).fill(0))
    return parseInt(reversed.join(""),2)
};