/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    const possibleCombinations = []
    for (let i =0;i<arr.length;i++){
        for (let j =i+1;j<arr.length;j++){
        possibleCombinations.push([arr[i],arr[j]])
    }   
    }
    possibleCombinations.sort((first,second) =>   first[0]/first[1] - second[0]/second[1] )
    return possibleCombinations[k-1]
};