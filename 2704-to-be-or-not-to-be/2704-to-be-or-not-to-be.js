/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const toBe = (secondVal) => {
        if (val !== secondVal) throw new Error("Not Equal")
        return true
    }
    const notToBe = (secondVal) => {
        if (val === secondVal) throw new Error("Equal")
        return true
    }
    return {toBe,notToBe}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */