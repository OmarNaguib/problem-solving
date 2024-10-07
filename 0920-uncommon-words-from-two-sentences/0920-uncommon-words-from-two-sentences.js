/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const firstHash = {}
    s1.split(" ").forEach((item)=>{
        firstHash[item] = firstHash[item]? firstHash[item] + 1:1;
    })
    const secondHash = {}
    s2.split(" ").forEach((item)=>{
        secondHash[item] = secondHash[item]? secondHash[item] + 1:1;
    })
    const firstUnique = new Set(Object.keys(firstHash).filter(key=>firstHash[key]===1))
    s2.split(" ").forEach((item)=>firstUnique.delete(item))
    const secondUnique = new Set(Object.keys(secondHash).filter(key=>secondHash[key]===1))
    s1.split(" ").forEach((item)=>secondUnique.delete(item))
    return [...firstUnique,...secondUnique]
};