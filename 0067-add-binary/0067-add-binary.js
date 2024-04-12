/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let final=""
    let carry=0
    const max = Math.max(a.length, b.length)
    for (let i =1; i<=max;i++){
        const aBit = +(a[a.length - i]?? 0)
        const bBit = +(b[b.length - i]?? 0)
        const result= aBit + bBit + carry
        let bitResult;
        if (result ===0) {bitResult="0";carry=0}
        if (result ===1) {bitResult="1";carry=0}
        if (result ===2) {bitResult="0";carry=1}
        if (result ===3) {bitResult="1";carry=1}
        final =  bitResult + final
    }
    if (carry) final = carry + final
    return final
};