/**
 * @param {character[]} chars
 * @return {number}
 */

// problem desctiption has descrepency on wheter you should be returning something
// ,aybe also need to add an example for when count is 10 or more
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
    while (i < chars.length){
        let currentChar = chars[i], count = 1;
        for (let j = i+1; j <= chars.length; j++){
            if (chars[j] === currentChar) {count++} else {
                const toSpread = count.toString().split("")
                if (count > 1) {
                    chars.splice(i+1,count-1,...toSpread)
                    i += toSpread.length
                }
                i ++
                break;
            }
        }
    }
};
// when meet char
// add count next element equal to 1
// loop through all remaining elements,
//     when meet same element: increase count by 1,
 //     if > 9 add char and count items else just increase it, remove that char
