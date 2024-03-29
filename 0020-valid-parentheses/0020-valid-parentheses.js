/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const queue=[]
    for (let char of s){
        switch(char){
            case "(":
            case "[":
            case "{":
                queue.push(char);
                break;
            case ")":
                if (queue.pop()!=="(") return false
                break;
            case "]":
                if (queue.pop()!=="[") return false
                break;
            case "}":
                if (queue.pop()!=="{") return false
                break;
    }
    }
    if (queue.length) return false
    return true
    
    
};