/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const hash = {};
    for (char of allowed) hash[char]=1
    return words.filter((word)=>{
        for (char of word) if (!hash[char]) return false
        return true
    }).length
};