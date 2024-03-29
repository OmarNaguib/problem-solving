/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let hash={1:1,2:2}
    const innerFunction=(n)=>{
        if (!hash[n]) hash[n] = innerFunction(n-1) + innerFunction(n-2)
        return hash[n]
    }
    return innerFunction(n)

};