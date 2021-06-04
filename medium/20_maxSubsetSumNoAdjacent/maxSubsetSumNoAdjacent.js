"use strict";
exports.__esModule = true;
exports.maxSubsetSumNoAdjacent = void 0;
var maxSubsetSumNoAdjacent = function (array) {
    if (array.length === 0)
        return 0;
    if (array.length === 1)
        return array[0];
    var first = array[0], second = Math.max(first, array[1]);
    var currSum = Math.max(first, second);
    for (var i = 2; i < array.length; i++) {
        currSum = Math.max(second, first + array[i]);
        first = second;
        second = currSum;
    }
    return currSum;
};
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
