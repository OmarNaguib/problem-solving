/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    while (true){
        const ABIndex = s.indexOf("AB")
        if (ABIndex !== -1) s = s.slice(0,ABIndex) + s.slice(ABIndex+2)
        
        const CDIndex = s.indexOf("CD")
        if (CDIndex !== -1) s = s.slice(0,CDIndex) + s.slice(CDIndex+2)

        if (ABIndex === -1 && CDIndex === -1) break;
    }
    return s.length
};