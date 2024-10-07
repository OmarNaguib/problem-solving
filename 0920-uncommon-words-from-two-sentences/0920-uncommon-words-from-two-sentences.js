/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const wordCount = {}
    s1.split(" ").forEach((item)=>{
        wordCount[item] = wordCount[item]? wordCount[item] + 1:1;
    })
    s2.split(" ").forEach((item)=>{
        wordCount[item] = wordCount[item]? wordCount[item] + 1:1;
    })
    return Object.keys(wordCount).filter(key=>wordCount[key]===1) 
};