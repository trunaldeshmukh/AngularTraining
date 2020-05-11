/*
EX 2 -> Define a string variable with data of 100 characheters in it and perform the following operation on the data
 - Find out the indexes and occurances of character 'a' in it
 - Findout number of statements in the string. (value after . symbol)
 - Convert the first character of the statement in Upper case.
*/
var StringOperations = /** @class */ (function () {
    function StringOperations() {
        this.myString = "My name is Trunal.i am working for Tavisca.i am currently doing my angular training.";
    }
    StringOperations.prototype.findOccurancesOfCharacter = function (char) {
        var charArr = this.myString.split('');
        var indexes = [];
        charArr.forEach(function (a, i) {
            if (a === char)
                indexes.push(i);
        });
        if (indexes.length > 0) {
            console.log(char + " character occured at indexes: " + indexes.toString());
        }
        else {
            console.log(char + " character not found in string");
        }
    };
    StringOperations.prototype.findNumberOfStatements = function () {
        var statements = this.myString.split('.').filter(function (m) { return m.length > 0; });
        if (statements && statements.length > 0) {
            console.log("Number of statements: " + statements.length);
        }
        else {
            console.log("Statements not found in string");
        }
    };
    StringOperations.prototype.convertStatementStartToUpperCase = function () {
        var statements = this.myString.split('.').filter(function (m) { return m.length > 0; });
        var newStatements = [];
        statements.forEach(function (s) {
            var newString = s.substr(0, 1).toUpperCase().concat(s.substr(1)).concat('.');
            newStatements.push(newString);
        });
        var upperString = '';
        newStatements.forEach(function (s) {
            upperString = upperString.concat(s);
        });
        console.log("Formatted string: " + upperString);
    };
    return StringOperations;
}());
var sops = new StringOperations();
sops.findOccurancesOfCharacter('a');
sops.findNumberOfStatements();
sops.convertStatementStartToUpperCase();
