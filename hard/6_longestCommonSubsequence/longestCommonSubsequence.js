"use strict";
exports.__esModule = true;
exports.longestCommonSubsequence = void 0;
function longestCommonSubsequence(str1, str2) {
    var dp = Array(str1.length + 1).fill(0).map(function () { return Array(str2.length + 1).fill(0); });
    for (var i = 1; i <= str1.length; i++) {
        for (var j = 1; j <= str2.length; j++) {
            dp[i][j] = str1[i - 1] === str2[j - 1] ? 1 + dp[i - 1][j - 1] : Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return buildSequece(dp, str1);
}
exports.longestCommonSubsequence = longestCommonSubsequence;
var buildSequece = function (dp, str1) {
    var res = [];
    var i = dp.length - 1, j = dp[0].length - 1;
    while (i > 0 && j > 0) {
        if (dp[i][j] === dp[i - 1][j]) {
            i--;
        }
        else if (dp[i][j] === dp[i][j - 1]) {
            j--;
        }
        else {
            res.unshift(str1[i - 1]);
            i--;
            j--;
        }
    }
    return res;
};
console.log(longestCommonSubsequence("ZXVVYZW", "XKYKZPW"));
