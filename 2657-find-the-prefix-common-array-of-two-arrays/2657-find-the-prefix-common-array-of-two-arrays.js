/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let result=[]
    const bSet = new Set()
    for (let i = 1;i<=A.length;i++){
        bSet.add(B[i-1])
        const intersection = A.slice(0,i).filter((number)=>bSet.has(number))
        result.push(intersection.length)
    }
    return result
    
};