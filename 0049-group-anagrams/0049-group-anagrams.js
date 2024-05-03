/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {}
    for (str of strs){
        const uniqueStr = [...str].sort().join("")
        if (!hash[uniqueStr]) hash[uniqueStr] = []
        hash[uniqueStr].push(str)
    }
    return Object.values(hash)
};