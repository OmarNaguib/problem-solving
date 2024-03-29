/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let index=0;index<nums.length;index++){
        const otherIndex = nums.slice(index+1).indexOf(target-nums[index]) 
        if (otherIndex != -1) return [index,otherIndex +index+1]
    }

    
};

