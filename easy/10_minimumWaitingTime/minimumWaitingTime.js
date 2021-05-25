var minimumWaitingTime = function (queries) {
    var sorted = queries.sort(function (a, b) { return a - b; });
    var curr = 0, sum = 0;
    for (var i = 1; i < sorted.length; i++) {
        curr += sorted[i - 1];
        sum += curr;
    }
    return sum;
};
console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
