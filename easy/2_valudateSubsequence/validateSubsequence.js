var isValidSubsequence = function (array, sequence) {
    if (sequence.length > array.length)
        return false;
    var i = 0, j = 0;
    while (i < array.length && j < sequence.length) {
        if (array[i] === sequence[j]) {
            j++;
        }
        i++;
    }
    return sequence.length === j;
};
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 23, 6, -1, 8, 10]));
