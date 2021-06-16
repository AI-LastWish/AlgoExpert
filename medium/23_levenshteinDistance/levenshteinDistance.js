var levenshteinDistance = function (str1, str2) {
    var edits = [];
    for (var i = 0; i < str2.length + 1; i++) {
        var row = [];
        for (var j = 0; j < str1.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        edits.push(row);
    }
    for (var i = 0; i < str2.length + 1; i++) {
        for (var j = 0; j < str1.length + 1; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                edits[i][j] = edits[i - 1][j - 1];
            }
            else {
                edits[i][j] = 1 + Math.min(edits[i - 1][i - 1], edits[i - 1][j], edits[i][j - 1]);
            }
        }
    }
    return edits[str2.length][str1.length];
};
console.log(levenshteinDistance('abc', 'yabc'));
