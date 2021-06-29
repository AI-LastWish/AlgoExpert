"use strict";
exports.__esModule = true;
exports.longestPalindromicSubstring = void 0;
function longestPalindromicSubstring(s) {
    var start = 0, end = 0, len = 0, oddLen = 0, evenLen = 0;
    for (var i = 0; i < s.length; i++) {
        oddLen = expandAroundCenter(s, i, i);
        evenLen = expandAroundCenter(s, i, i + 1);
        len = Math.max(oddLen, evenLen);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2) + 1;
        }
        console.log(start, end, len);
    }
    return s.slice(start, end);
}
exports.longestPalindromicSubstring = longestPalindromicSubstring;
var expandAroundCenter = function (s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
};
console.log(longestPalindromicSubstring("abaxyzzyxf"));
