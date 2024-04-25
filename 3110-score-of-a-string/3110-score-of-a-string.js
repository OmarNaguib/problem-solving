/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let total = 0;
    let past=s[0]
    for (char of s.slice(1)){
        total += Math.abs(char.charCodeAt(0) - past.charCodeAt(0))
        past = char
    }
    return total
};