"use strict";
exports.__esModule = true;
exports.staircaseTraversal = void 0;
var staircaseTraversal = function (height, maxSteps) {
    if (maxSteps === 1)
        return 1;
    if (height < 2)
        return height;
    var steps = [1, 1];
    for (var i = 2; i <= height; i++) {
        var curr = 0;
        for (var j = i - 1; j > i - 1 - maxSteps && j >= 0; j--) {
            curr += steps[j];
        }
        steps.push(curr);
    }
    return steps[height];
};
exports.staircaseTraversal = staircaseTraversal;
console.log(exports.staircaseTraversal(15, 5));
