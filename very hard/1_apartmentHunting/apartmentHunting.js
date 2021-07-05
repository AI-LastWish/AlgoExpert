"use strict";
exports.__esModule = true;
exports.apartmentHunting = void 0;
function apartmentHunting(blocks, reqs) {
    var minDistFromBlocks = reqs.map(function (req) { return getMinDist(blocks, req); });
    var maxDistAtBlocks = getMaxDistAtBlocks(blocks.length, minDistFromBlocks);
    return maxDistAtBlocks.indexOf(Math.min.apply(Math, maxDistAtBlocks));
}
exports.apartmentHunting = apartmentHunting;
var getMinDist = function (blocks, req) {
    var minDist = new Array(blocks.length);
    var closestReqIdx = Infinity;
    for (var i = 0; i < blocks.length; i++) {
        if (blocks[i][req])
            closestReqIdx = i;
        minDist[i] = Math.abs(i - closestReqIdx);
    }
    for (var i = blocks.length - 1; i >= 0; i--) {
        if (blocks[i][req])
            closestReqIdx = i;
        minDist[i] = Math.min(minDist[i], Math.abs(i - closestReqIdx));
    }
    return minDist;
};
var getMaxDistAtBlocks = function (length, minDistFromBlocks) {
    var maxDistAtBlocks = new Array(length);
    var _loop_1 = function (i) {
        var minDistAtBlock = minDistFromBlocks.map(function (dist) { return dist[i]; });
        maxDistAtBlocks[i] = Math.max.apply(Math, minDistAtBlock);
    };
    for (var i = 0; i < length; i++) {
        _loop_1(i);
    }
    return maxDistAtBlocks;
};
console.log(apartmentHunting([
    {
        "gym": false,
        "school": true,
        "store": false
    },
    {
        "gym": true,
        "school": false,
        "store": false
    },
    {
        "gym": true,
        "school": true,
        "store": false
    },
    {
        "gym": false,
        "school": true,
        "store": false
    },
    {
        "gym": false,
        "school": true,
        "store": true
    }
], ["gym", "school", "store"]));
