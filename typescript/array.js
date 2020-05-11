/*
EX 1 -> Sort and Reverse data from string array based on string length.
*/
var SortArray = /** @class */ (function () {
    function SortArray() {
        this.names = new Array();
        this.initializeArray();
    }
    SortArray.prototype.initializeArray = function () {
        this.names.push("James Bond");
        this.names.push("Ethan Hunt");
        this.names.push("Indiana Jones");
        this.names.push("Jason Bourn");
    };
    SortArray.prototype.printArray = function (arr) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var n = arr_1[_i];
            console.log(n);
        }
    };
    SortArray.prototype.sortArrayOnLength = function (arr) {
        return arr.sort(function (a, b) {
            if (a.length == b.length)
                return 0;
            else if (a.length > b.length)
                return 1;
            else
                return -1;
        });
    };
    return SortArray;
}());
var arrObj = new SortArray();
console.log("original array");
arrObj.printArray(arrObj.names);
arrObj.names = arrObj.sortArrayOnLength(arrObj.names);
console.log();
console.log("after sorting");
arrObj.printArray(arrObj.names);
console.log();
arrObj.names = arrObj.names.reverse();
console.log("after Reversing");
arrObj.printArray(arrObj.names);
