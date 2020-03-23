/*creare nel file calculator.js un oggetto calculator con 
una proprietà values: un array di valori e 4 metodi add, sub, mul, div che 
eseguano le 4 operazioni fondamentali sulla proprietà values e restituiscano 
in output il risultato dell'operazione. Ad esempio: */

let calculator = {
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

calculator.values = [4, 5, 6, 0];
console.log(calculator.sum())
console.log(calculator.sub())
console.log(calculator.mul())
console.log(calculator.div())
