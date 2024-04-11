/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x===1) return 1
    if (x===-1) return n%2===0?1:-1;
    let result = 1;
    let currentMultiplicator = x
    if (n>0) {
        while (n>0)  {
            const isOne = n % 2
            n = Math.floor(n/2)
            if (isOne) result *= currentMultiplicator
            currentMultiplicator *= currentMultiplicator
        }
        return result
    }
    if (n<0) return 1 / myPow(x, -n)
    if (n===0) return 1
    
};