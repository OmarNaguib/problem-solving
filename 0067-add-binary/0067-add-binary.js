/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let final=""
    let remainder=0
    for (let i =1; i<=Math.max(a.length, b.length);i++){
        const aBit = +(a[a.length - i]?? 0)
        const bBit = +(b[b.length - i]?? 0)
        const result= aBit + bBit + remainder
        console.log(result)
        let bitResult;
        if (result ===0) {bitResult="0";remainder=0}
        if (result ===1) {bitResult="1";remainder=0}
        if (result ===2) {bitResult="0";remainder=1}
        if (result ===3) {bitResult="1";remainder=1}
        final =  bitResult + final
    }
    if (remainder) final = remainder + final
    return final
};