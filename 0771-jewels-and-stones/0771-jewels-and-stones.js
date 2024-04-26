/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const hash = {}
    let result = 0
    for (jewel of jewels) hash[jewel] = 1
    for (stone of stones) if (hash[stone]) result++
    return result
};