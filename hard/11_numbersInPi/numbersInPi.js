"use strict";
exports.__esModule = true;
exports.numbersInPi = void 0;
function numbersInPi(pi, numbers) {
    var numberTables = {};
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        numberTables[num] = true;
    }
    var minSpaces = getMinSpaces(pi, numberTables, {}, 0);
    return minSpaces === Infinity ? -1 : minSpaces;
}
exports.numbersInPi = numbersInPi;
var getMinSpaces = function (pi, numberTables, cache, idx) {
    if (idx === pi.length)
        return -1;
    if (idx in cache)
        return cache[idx];
    var minSpaces = Infinity;
    for (var i = idx; i < pi.length; i++) {
        var prefix = pi.slice(idx, i + 1);
        if (prefix in numberTables) {
            var minSpacesInSuffix = getMinSpaces(pi, numberTables, cache, i + 1);
            minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);
        }
    }
    cache[idx] = minSpaces;
    return cache[idx];
};
console.log(numbersInPi("3141592653589793238462643383279", ["314159265358979323846", "26433", "8", "3279", "314159265", "35897932384626433832", "79"]));
