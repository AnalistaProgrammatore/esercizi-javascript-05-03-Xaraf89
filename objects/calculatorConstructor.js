/*creare nel file calculatorConstructor.js la funzione costrutture Calculator(values) che 
dato in input un array di valori crei l'oggetto calculator dell'esercizio numero 5.*/


function Calculator(values) {
    //this._sum = sum;
    //this._sub = sub;
    //this._mul = mul;
    //this._div = div;
    return {
        values: [...values],
        sum: function () {
            return this.values.reduce((x, y) => x + y)
        },
        sub: function () {
            return this.values.reduce((x, y) => x - y)
        },
        mul: function () {
            return this.values.reduce((x, y) => x * y)
        },
        div: function () {
            return this.values.reduce((x, y) => x / y)
        }
    }
}
let calculator2 = new Calculator([4, 5, 6, 0]);
console.log(calculator2)
console.log(calculator2.sum())
console.log(calculator2.sub())
console.log(calculator2.mul())
console.log(calculator2.div())