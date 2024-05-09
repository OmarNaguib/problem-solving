/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    return happiness.sort((a,b) => b-a )
        .slice(0,k).map((number,i) => Math.max(0,number-i))
        .reduce((total,curr) => total + curr)
};