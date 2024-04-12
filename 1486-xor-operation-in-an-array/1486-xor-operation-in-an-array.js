/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let nums=[]
    for (let i=0;i<n;i++) nums.push(start+2*i)
    return nums.reduce((total,current)=>total^current)
};