/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    return happiness.sort((a,b) => b-a ).slice(0,k)
        .reduce((total,curr,i) => total + Math.max(0,curr-i),0) 
};