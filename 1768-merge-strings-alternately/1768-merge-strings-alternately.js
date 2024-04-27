/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = ""
    let i;
    for (i=0;i<word1.length && i<word2.length;i++) result += word1[i]+word2[i]
    result += word1.slice(i)+word2.slice(i)
    return result
};