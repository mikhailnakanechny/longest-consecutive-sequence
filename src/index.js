module.exports = function longestConsecutiveLength(array) {

    const allNums = {};
    let max = 0;
    let curr;
    for (let i = 0; i < array.length; i ++) {
        curr = array[i];
        if (allNums[curr] !== undefined) {
            continue;
        }
        allNums[curr] = 1 + (allNums[curr + 1] || 0);
        while (allNums[curr - 1] !== undefined) {
            allNums[curr - 1] = allNums[curr] + 1;
            curr = curr-1;
        }
        max = Math.max(max, allNums[curr]);
    }
    return max;
};
