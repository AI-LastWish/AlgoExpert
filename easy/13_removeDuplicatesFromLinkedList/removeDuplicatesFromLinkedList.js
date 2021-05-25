"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.value = value;
        this.next = null;
    }
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var removeDuplicatesFromLinkedList = function (linkedList) {
    var curr = linkedList;
    while (curr) {
        var next = curr.next;
        while (next && curr.value === next.value) {
            next = next.next;
        }
        // remove all duplicate Node
        curr.next = next;
        // point to next Node
        curr = next;
    }
    return linkedList;
};
