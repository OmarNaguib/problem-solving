/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a,b) => a-b)
    let fullSum;
    while (satisfaction.length>0){
        const fullSum = satisfaction.reduce((total,curr,index) => total + curr * (index+1), 0)
        const sliceSum = satisfaction.slice(1).reduce((total,curr,index) => total + curr * (index+1), 0)
        if (sliceSum > fullSum) {satisfaction.splice(0,1)} else {break;}
    }
    return satisfaction.reduce((total,curr,index) => total + curr * (index+1), 0)
};