/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sorted = score.slice().sort((a,b) => b - a)
    const rankArray = score.map((score)=>{
        const rank = sorted.indexOf(score)
        if (rank < 3) return ["Gold Medal","Silver Medal","Bronze Medal"][rank]
        return (rank+1).toString()
    })
    return rankArray
    
};