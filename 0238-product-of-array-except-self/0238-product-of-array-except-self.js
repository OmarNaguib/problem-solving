/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefixes = [], suffixes =[], result=[]
    let product = 1;
    for (num of nums) {
        prefixes.push(product)
        product *= num
    }
    product = 1
    for (num of nums.reverse()) {
        suffixes.push(product)
        product *= num
    }
    for (let i=0;i<nums.length;i++) result.push(prefixes[i] * suffixes[nums.length-i-1])
    return result
};