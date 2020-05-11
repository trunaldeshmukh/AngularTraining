class SortArray {
    names: Array<string> = new Array<string>();
    constructor() {
        this.initializeArray();
    }

    initializeArray() {
        this.names.push("James Bond");
        this.names.push("Ethan Hunt");
        this.names.push("Indiana Jones");
        this.names.push("Jason Bourn");
    }
    printArray(arr: Array<string>) {
        for (let n of arr) {
            console.log(n);
        }
    }
    sortArrayOnLength(arr: Array<string>) {
       return arr.sort(function (a: string, b: string): number {
            if (a.length == b.length)
                return 0;
            else if (a.length > b.length)
                return 1;
            else return -1;
        })
    }
}

let arrObj = new SortArray();
console.log(`original array`)
arrObj.printArray(arrObj.names);
arrObj.names = arrObj.sortArrayOnLength(arrObj.names);

console.log();
console.log(`after sorting`)
arrObj.printArray(arrObj.names);

console.log();
arrObj.names = arrObj.names.reverse();
console.log(`after Reversing`)
arrObj.printArray(arrObj.names);