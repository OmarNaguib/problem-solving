/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    if (arr.length === 2) return arr
    const possibleCombinations = []
    for (let i =0;i<arr.length;i++){
        for (let j =i+1;j<arr.length;j++){
        possibleCombinations.push([arr[i],arr[j]])
    }   
    }
    possibleCombinations.sort((first,second) =>  second[0]/second[1] - first[0]/first[1] )
    return possibleCombinations[possibleCombinations.length - k]
};