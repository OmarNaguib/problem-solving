/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    return n.toString(2).split("").reduce((total,curr) => total + +(curr==="1"),0)
};


