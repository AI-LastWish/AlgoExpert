var bubbleSort = function (array) {
    var isSorted = false, n = array.length;
    for (var i = 0; i < n - 1; i++) {
        isSorted = true;
        for (var j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                isSorted = false;
            }
        }
        if (isSorted)
            break;
    }
    return array;
};
var swap = function (array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
};
