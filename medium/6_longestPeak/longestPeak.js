var longestPeak = function (array) {
    var peaks = [];
    var longestP = 0;
    // find all peaks
    for (var i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            peaks.push(i);
        }
    }
    for (var i = 0; i < peaks.length; i++) {
        var leftIdx = peaks[i] - 1;
        var rightIdx = peaks[i] + 1;
        var currP = 3;
        while (leftIdx >= 1 && array[leftIdx] > array[leftIdx - 1]) {
            currP++;
            leftIdx--;
        }
        while (rightIdx <= array.length - 2 && array[rightIdx] > array[rightIdx + 1]) {
            currP++;
            rightIdx++;
        }
        if (currP > longestP)
            longestP = currP;
    }
    return longestP;
};
console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
