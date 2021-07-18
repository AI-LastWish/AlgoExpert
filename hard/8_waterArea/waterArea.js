"use strict";
exports.__esModule = true;
exports.waterArea = void 0;
function waterArea(heights) {
    if (heights.length === 0)
        return 0;
    var leftIdx = 0, rightIdx = heights.length - 1;
    var leftMax = heights[leftIdx], rightMax = heights[rightIdx];
    var surfaceArea = 0;
    while (leftIdx < rightIdx) {
        if (heights[leftIdx] < heights[rightIdx]) {
            leftIdx++;
            leftMax = Math.max(leftMax, heights[leftIdx]);
            surfaceArea += leftMax - heights[leftIdx];
        }
        else {
            rightIdx--;
            rightMax = Math.max(rightMax, heights[rightIdx]);
            surfaceArea += rightMax - heights[rightIdx];
        }
    }
    return surfaceArea;
}
exports.waterArea = waterArea;
console.log(waterArea([4, 1, 3, 0, 10]));
