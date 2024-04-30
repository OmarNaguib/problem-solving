/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum =nums.slice(0,k).reduce((total,curr)=>total+curr)
    let max=sum;
    for (let i =k-1;i<nums.length;i++){
        if (sum > max) max = sum
        sum +=nums[i+1]-nums[i-(k-1)]
    }
    return max/k
};