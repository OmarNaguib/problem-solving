/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let count = 0;
    for (char of (start^goal).toString(2)) if (char ==="1") count++
    return count
};