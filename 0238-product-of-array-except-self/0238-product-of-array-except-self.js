/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefixes = [], suffixes =[], result=[]
    let prefixesProduct = 1,suffixesProduct=1;
    for (let i =0;i<nums.length;i++){
        prefixes.push(prefixesProduct)
        suffixes.push(suffixesProduct)
        prefixesProduct *= nums[i]
        suffixesProduct *= nums[nums.length-i-1]
    }
    for (let i=0;i<nums.length;i++) result.push(prefixes[i] * suffixes[nums.length-i-1])
    return result
};