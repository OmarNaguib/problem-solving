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
        possibleCombinations.push([i,j])
    }   
    }
    possibleCombinations.sort((first,second) =>  arr[second[0]]/arr[second[1]] - arr[first[0]]/arr[first[1]] )
    return possibleCombinations[possibleCombinations.length - k].map(i=>arr[i])
};