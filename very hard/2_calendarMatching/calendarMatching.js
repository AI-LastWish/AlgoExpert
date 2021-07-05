"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.calendarMatching = void 0;
function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
    var updatedCal1 = updateCal(calendar1, dailyBounds1);
    var updatedCal2 = updateCal(calendar2, dailyBounds2);
    var mergedCal = mergeCals(updatedCal1, updatedCal2);
    var flattenedCal = flattenCal(mergedCal);
    return getMatchingAvailabilities(flattenedCal, meetingDuration);
}
exports.calendarMatching = calendarMatching;
var updateCal = function (calendar, dailyBounds) {
    var updatedCal = __spreadArray(__spreadArray([['0:00', dailyBounds[0]]], calendar), [[dailyBounds[1], '23:59']]);
    return updatedCal.map(function (meeting) { return meeting.map(timeToMinutes); });
};
var timeToMinutes = function (time) {
    var _a = time.split(':').map(function (str) { return +str; }), hours = _a[0], minutes = _a[1];
    return hours * 60 + minutes;
};
var mergeCals = function (updatedCal1, updatedCal2) {
    var merged = [];
    var i = 0, j = 0;
    while (i < updatedCal1.length && j < updatedCal2.length) {
        if (updatedCal1[i][0] < updatedCal2[j][0]) {
            merged.push(updatedCal1[i]);
            i++;
        }
        else {
            merged.push(updatedCal2[j]);
            j++;
        }
    }
    while (i < updatedCal1.length)
        merged.push(updatedCal1[i++]);
    while (j < updatedCal2.length)
        merged.push(updatedCal2[j++]);
    return merged;
};
var flattenCal = function (mergedCal) {
    var flattened = [mergedCal[0].slice()];
    for (var i = 1; i < mergedCal.length; i++) {
        var _a = mergedCal[i], currStart = _a[0], currEnd = _a[1];
        var _b = flattened[flattened.length - 1], prevStart = _b[0], prevEnd = _b[1];
        if (prevEnd >= currStart) {
            flattened[flattened.length - 1] = [prevStart, Math.max(prevEnd, currEnd)];
        }
        else {
            flattened.push([currStart, currEnd].slice());
        }
    }
    console.log(flattened);
    return flattened;
};
var getMatchingAvailabilities = function (flattenedCal, meetingDuration) {
    var matchingAvailabilities = [];
    for (var i = 1; i < flattenedCal.length; i++) {
        var start = flattenedCal[i - 1][1], end = flattenedCal[i][0];
        var availabilityDuration = end - start;
        if (availabilityDuration >= meetingDuration) {
            matchingAvailabilities.push([start, end]);
        }
    }
    return matchingAvailabilities.map(function (leisure) { return leisure.map(minutesToTime); });
};
var minutesToTime = function (minutes) {
    var hours = Math.floor(minutes / 60).toString();
    var mins = minutes % 60 < 10 ? '0' + (minutes % 60).toString() : (minutes % 60).toString();
    return hours + ":" + mins;
};
console.log(calendarMatching([
    ["9:00", "10:30"],
    ["12:00", "13:00"],
    ["16:00", "18:00"]
], ["9:00", "20:00"], [
    ["10:00", "11:30"],
    ["12:30", "14:30"],
    ["14:30", "15:00"],
    ["16:00", "17:00"]
], ["10:00", "18:30"], 30));
