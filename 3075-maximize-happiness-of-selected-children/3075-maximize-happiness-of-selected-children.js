/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    const sorted = happiness.sort((a,b) => b-a ).slice(0,k)
    const subtracted = sorted.map((number,i) => Math.max(0,number-i))
    return subtracted.reduce((total,curr) => total + curr)
    
};