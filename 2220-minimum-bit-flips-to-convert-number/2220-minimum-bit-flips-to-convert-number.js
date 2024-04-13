/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let count = 0;
    const flipper = (start^goal).toString(2)
    for (char of flipper) if (char ==="1") count++
    return count
};