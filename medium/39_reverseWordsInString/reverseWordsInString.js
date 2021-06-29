"use strict";
exports.__esModule = true;
exports.reverseWordsInString = void 0;
function reverseWordsInString(string) {
    var s = splitFunc(string), res = "";
    for (var i = s.length - 1; i >= 0; i--) {
        if (i === 0) {
            res += s[i];
        }
        else {
            res += s[i] + " ";
        }
    }
    return res;
}
exports.reverseWordsInString = reverseWordsInString;
var splitFunc = function (s) {
    var res = [], temp = '';
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            temp += s[i];
        }
        else {
            res.push(temp);
            temp = '';
        }
        if (i === s.length - 1) {
            res.push(temp);
        }
    }
    return res;
};
console.log(reverseWordsInString('maga 2020!'));
