/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const hash = {}
    let max = 0;
    for (num of nums){
        if (hash[num]) continue;
        const prev = (hash[num-1] ?? 0)
        const next = (hash[num + 1] ?? 0)
        hash[num] = prev + next +1
        hash[num - prev] = prev + next + 1
        hash[num + next] = prev + next + 1
        max = Math.max(max, prev + next + 1)
    }
    return max
};


// if meet number, number to next and right is 1
// if meet a number, 2 values need to be the value of left and right
// need to keep the value of max, if the new value is bigger than max, store it