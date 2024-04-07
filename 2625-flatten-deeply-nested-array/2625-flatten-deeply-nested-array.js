/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    while (n>0){
        let newArray=[]
        for (element of arr){
            if (element instanceof Array) newArray.push(...element)
            else newArray.push(element)
        }
        arr = newArray
        n--
    }
    return arr
    
};