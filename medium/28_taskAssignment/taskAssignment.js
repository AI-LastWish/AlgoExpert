"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.taskAssignment = void 0;
function taskAssignment(k, tasks) {
    var pairedTasks = [];
    var sortedTasks = __spreadArray([], tasks).sort(function (a, b) { return a - b; });
    var tasksDurationToIdx = getTaskDurationToIdx(tasks);
    var left = 0, right = sortedTasks.length - 1, first = 0, second = 0;
    while (left < right) {
        first = tasksDurationToIdx[sortedTasks[left]].pop();
        second = tasksDurationToIdx[sortedTasks[right]].pop();
        left++;
        right--;
        pairedTasks.push([first, second]);
    }
    return pairedTasks;
}
exports.taskAssignment = taskAssignment;
var getTaskDurationToIdx = function (tasks) {
    var taskDurationToIdx = {};
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i] in taskDurationToIdx) {
            taskDurationToIdx[tasks[i]].push(i);
        }
        else {
            taskDurationToIdx[tasks[i]] = [i];
        }
    }
    return taskDurationToIdx;
};
console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]));
