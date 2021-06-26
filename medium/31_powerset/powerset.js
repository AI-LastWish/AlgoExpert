"use strict";
exports.__esModule = true;
exports.powerset = void 0;
function powerset(array) {
    var subsets = [[]];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var el = array_1[_i];
        var length_1 = subsets.length;
        for (var i = 0; i < length_1; i++) {
            subsets.push(subsets[i].concat(el));
        }
    }
    return subsets;
}
exports.powerset = powerset;
