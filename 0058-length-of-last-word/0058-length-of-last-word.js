/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count=0;
    for (char of s.trim().split("").reverse()){
        if (char===" ") break;
        count++;
    }
return count
    
};