/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = []
    for (let i=0;i<=n;i++) result.push(i.toString(2).split("").filter(char=>char==="1").length)
    return result
};