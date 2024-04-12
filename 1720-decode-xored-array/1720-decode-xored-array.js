/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const result=[first]
    for (num of encoded) result.push(result[result.length-1]^num)
    return result
};