/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const hash = {}
    let result = 0
    nums.forEach((num)=>{
        if (hash[num]) {result+= hash[num]}
        else {hash[num] = 0}
        hash[num]++
    })
    return result
};