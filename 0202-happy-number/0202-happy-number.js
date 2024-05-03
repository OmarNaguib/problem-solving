/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while (n!==1){
        let newN = 0;
        for (char of n.toString()) newN += char**2
        if (newN === 20 )return false
        n=newN
    }
    return true
};