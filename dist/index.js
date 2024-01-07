"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAbbreviatedMonthName(monthNumber) {
    if (typeof monthNumber !== "number" || monthNumber < 1 || monthNumber > 12) {
        throw new Error("Invalid month number. Please provide a number between 1 and 12.");
    }
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return monthNames[monthNumber - 1];
}
exports.default = getAbbreviatedMonthName;
