var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var thresholdNumber = function (_a) {
    var numbers = _a.numbers, threshold = _a.threshold;
    var copiedNumbers = __spreadArray([], numbers, true);
    var finalResult = copiedNumbers.filter(function (num) { return num >= threshold; });
    var count = finalResult.length;
    return "There ".concat(count <= 1 ? 'is' : 'are', " ").concat(count, " ").concat(count > 1 ? 'numbers' : 'number', " greater than ").concat(threshold, ": ").concat(finalResult);
};
var data = {
    numbers: [3, 8, 15, 6, 22, 9, 78, 1],
    threshold: 90
};
console.log(thresholdNumber(data));
