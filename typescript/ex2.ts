/*
EX 2 -> Define a string variable with data of 100 characheters in it and perform the following operation on the data
 - Find out the indexes and occurances of character 'a' in it 
 - Findout number of statements in the string. (value after . symbol) 
 - Convert the first character of the statement in Upper case.
*/
class StringOperations {
    myString: string = `My name is Trunal.i am working for Tavisca.i am currently doing my angular training.`;
    constructor() { }

    findOccurancesOfCharacter(char: string) {
        let charArr: Array<string> = this.myString.split('');
        let indexes: Array<number> = [];
        charArr.forEach((a, i) => {
            if (a === char)
                indexes.push(i);
        })
        if (indexes.length > 0) {
            console.log(`${char} character occured at indexes: ${indexes.toString()}`);
        }
        else {
            console.log(`${char} character not found in string`);
        }
    }

    findNumberOfStatements() {
        let statements: Array<string> = this.myString.split('.').filter(m => m.length > 0);
        if (statements && statements.length > 0) {
            console.log(`Number of statements: ${statements.length}`);
        } else {
            console.log(`Statements not found in string`);
        }
    }

    convertStatementStartToUpperCase() {
        let statements: Array<string> = this.myString.split('.').filter(m => m.length > 0);
        let newStatements: Array<string> = [];
        statements.forEach(s => {
            let newString = s.substr(0, 1).toUpperCase().concat(s.substr(1)).concat('.');
            newStatements.push(newString);
        })
        let upperString: string = '';
        newStatements.forEach(s => {
            upperString = upperString.concat(s);
        });
        console.log(`Formatted string: ${upperString}`);
    }
}

let sops = new StringOperations();
sops.findOccurancesOfCharacter('a');
sops.findNumberOfStatements();
sops.convertStatementStartToUpperCase();