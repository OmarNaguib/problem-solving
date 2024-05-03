/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const array1 = version1.split(".")
    const array2 = version2.split(".")
    for (let i = 0;i<array1.length || i<array2.length;i++){
        const n1 = +(array1[i]??"0")
        const n2 = +(array2[i]??"0")
        if (n1 < n2) return -1
        if (n2 < n1) return 1
    }
    return 0
};