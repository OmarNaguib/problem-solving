/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[]
    for (let char of s){
        switch(char){
            case "(":
            case "[":
            case "{":
                stack.push(char);
                break;
            case ")":
                if (stack.pop()!=="(") return false
                break;
            case "]":
                if (stack.pop()!=="[") return false
                break;
            case "}":
                if (stack.pop()!=="{") return false
                break;
    }
    }
    if (stack.length) return false
    return true
    
    
};