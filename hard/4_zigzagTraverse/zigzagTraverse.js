"use strict";
exports.__esModule = true;
exports.zigzagTraverse = void 0;
function zigzagTraverse(array) {
    var height = array.length - 1, width = array[0].length - 1;
    var res = [];
    var row = 0, col = 0;
    var goingDown = true;
    while (!outOfBound(row, col, height, width)) {
        res.push(array[row][col]);
        if (goingDown) {
            if (col === 0 || row === height) {
                goingDown = false;
                if (row === height) {
                    col++;
                }
                else {
                    row++;
                }
            }
            else {
                row++;
                col--;
            }
        }
        else {
            if (col === width || row === 0) {
                goingDown = true;
                if (col === width) {
                    row++;
                }
                else {
                    col++;
                }
            }
            else {
                row--;
                col++;
            }
        }
    }
    return res;
}
exports.zigzagTraverse = zigzagTraverse;
var outOfBound = function (row, col, height, width) {
    return row < 0 || row > height || col < 0 || col > width;
};
console.log(zigzagTraverse([[1, 2, 3, 4, 5]]));
