/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
//     loop through indexes
//     add new elements to the set
// push the length of the intersection between them
    let result=[]
    for (let i = 1;i<=A.length;i++){
        const bSet= new Set([...B.slice(0,i)])
        const intersection = A.slice(0,i).filter((number)=>bSet.has(number))
        result.push(intersection.length)
    }
    return result
    
};